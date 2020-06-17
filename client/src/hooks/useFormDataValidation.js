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



export const isRequired = (value, field) => !value && `${getExactName(field)} is required`



const postCodeRegx= /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/; 

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
const payment = (key) => {
  switch (key) {
    case 'card_number':
      return 'Card Number';
    case 'expiry_at':
      return 'Expiry Year';
    case 'cvv':
      return 'cvv';
    case 'name':
      return 'Name on Card';
    case 'phone':
      return 'Phone Number';
    case 'email':
      return 'Email Address';

      default:
        return 'Field';
  }
}

export const isRequiredPayment = (value, field) => !value && `${payment(field)} is required`

const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
export const validCreditCard = value => !cardRegex.test(value) && 'Please enter a valid card number'

const cvvRegex = /^[0-9]{3,4}$/;
export const validCvv = value => !cvvRegex.test(value) && 'CVV invalid'

const date = /^(0[1-9]|1[0-2]).+(20)?(2[0-9]|[2-9]\d)$/;
export const validDate = value => !date.test(value) && 'Please enter e valid date'

export const phoneNumber = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
export const validNumber = value => !phoneNumber.test(value) && 'Please enter a valid UK phone number'

const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isValidEmail = value => !email.test(value) && 'A valid email address is required for your subscription'

const name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const isValidCardName = value => !name.test(value) && 'Please type a valid credit card name'

