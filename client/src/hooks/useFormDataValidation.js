import { useState, useEffect } from 'react'

export default function useFormDataValidation(initValues = {}, initErrors = {}, successCallback, fieldValidators = {}) {
  
  const [values, setValues] = useState({ ...initValues });

  const [dirtyInit, setDirtyInit] = useState({ ...initValues });

  let [errors, setErrors] = useState({ ...initErrors });
  const [, setIsSubmitting] = useState(false)

  if (
    dirtyInit !== true &&
    JSON.stringify(dirtyInit) !== JSON.stringify(initValues)
  ) {
    setValues({ ...initValues })
    setDirtyInit(true)
  }

  const validate = (fieldValues, oldErr) => {
    let newErrors = {}
    Object.keys(fieldValues).forEach(field => {
      const value = fieldValues[field]
      let valitationExps = fieldValidators[field]
      if (typeof valitationExp === 'function') {
        valitationExps = [valitationExps]
      }
      if (Array.isArray(valitationExps)) {
        valitationExps.forEach(valitationExp => {
          if (
            typeof valitationExp === 'function' &&
            !newErrors[field] &&
            valitationExp(value, values)
          ) {
            if (oldErr && oldErr[field]) {
              return
            }
            newErrors[field] = valitationExp(value, field)
          } else {
            if(oldErr && oldErr[field]){
              delete oldErr[field]
            }
          }
        })
      }
    })
    return { ...oldErr, ...newErrors }
  }

  const formSubmit = event => {
    event.preventDefault()
    setIsSubmitting(true)
    let anyErrors = validate(values)
    if (Object.keys(anyErrors).length === 0) {
      successCallback(values)
    } else {
      setErrors(anyErrors)
    }
    setIsSubmitting(false)
  }

  const fieldChange = (event, name) => {
    let { value, type, checked } = event.target
    if (type === 'checkbox') {
      const checkboxValues = values[name]
      if (Array.isArray(checkboxValues)) {
        value = checked ? [...checkboxValues, value] : checkboxValues.filter(e => e !== value)
      } else {
        value = checked
        console.warn('[violation] Initial value for checkbox field "' + name + '" should be array.', checked)
      }
    }
    setValues(values => ({
      ...values,
      [name]: value
    }))
    setErrors(er => validate({ [name]: value }, er))
  }

  useEffect(() => {
    setErrors(e => ({ ...e, ...errors }))
  }, [values]);

  return {
    values,
    errors,
    fieldChange,
    formSubmit  
  };
}

const getExactName = (key) => {
  switch (key) {
    case 'firstname':
      return 'First name';
    case 'lastname':
      return 'Last name';
    case 'fullname':
      return 'Full name';
    case 'postcode':
      return 'Postcode';
    case 'address_1':
      return 'Address 1';
    case 'address_2':
      return 'Address 2';
    case 'town':
      return 'Town';
  
    default:
      return 'Field';
  }
}

const emailRegex = /\S+@\S+\.\S+/;

export const isRequired = (value, field) => !value && `${getExactName(field)} is required`

export const isEmail = value =>
  !emailRegex.test(value) && 'Field must be a valid email';

const postCodeRegx= /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;

export const isValidPostCode = value => !postCodeRegx.test(value) && 'Please enter a valid postcode';

export const customValidation = (method, message) => (
  value,
  allvalue
) => method(value, allvalue) && message

export const checkboxHelper = (data, value) => {
  if (Array.isArray(data)) {
    return data.includes(value)
  }
  return data
}