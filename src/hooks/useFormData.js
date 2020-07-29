import { useState, useRef } from 'react';

export default function useFormData(
  initialData = {},
  isInitialDataForPlaceholder = null,
) {
  const [formData, setFormData] = useState(initialData);

  const initialFormData = useRef(initialData).current;

  const onChange = (target) => {
    if (!target) return;
    const { value } = target;
    const path = target.keyToUpdate.split('.');

    setFormData((data) => ({
      ...data,
      [path[0]]: {
        ...data[path[0]],
        [path[1]]: value,
      },
    }));
  };

  return [formData, onChange, initialFormData, isInitialDataForPlaceholder];
}
