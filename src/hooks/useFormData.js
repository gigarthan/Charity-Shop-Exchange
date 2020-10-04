import { useState, useRef } from 'react';

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

export default function useFormData(
  initialData = {},
  isInitialDataForPlaceholder = null,
) {
  const [formData, setFormData] = useState(initialData);

  const initialFormData = useRef(initialData).current;

  /**
   * ! DO NOT CHANGE THE DEFAULT
   * ? each property is set to formData so if any property gets update, the others value remain the same.
   */
  const onChange = ({ countyId, charityId, checkoutItems, ...form }) => {
    setFormData((prevState) => {
      console.log('form', form, checkoutItems);
      console.log('formData', clone(prevState));

      const newValues = {
        countyId: countyId || prevState.countyId,
        charityId: charityId || prevState.charityId,
        checkoutItems: checkoutItems || prevState.checkoutItems,
      };

      if (form.keyToUpdate) {
        const keys = form.keyToUpdate.split('.');
        const refForm = keys.reduce((pointer, key, index) => {
          if (index === keys.length - 1) {
            return pointer;
          }
          return pointer[key];
        }, prevState);

        if (refForm) {
          const keyToUpdate = keys[keys.length - 1];
          refForm[keyToUpdate] = form.value;
        }
      }

      return { ...prevState, ...newValues };
    });
  };

  return [formData, onChange, initialFormData, isInitialDataForPlaceholder];
}
