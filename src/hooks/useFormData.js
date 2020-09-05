import { useState, useRef } from 'react';

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
  const onChange = ({
    countyId = formData.countyId,
    charityId = formData.charityId,
    checkoutItems = formData.checkoutItems,
  }) => {
    setFormData((prevState) => ({
      ...prevState,
      countyId,
      charityId,
      checkoutItems,
    }));
  };

  return [formData, onChange, initialFormData, isInitialDataForPlaceholder];
}
