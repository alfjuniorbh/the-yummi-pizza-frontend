import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function Input({ name, label, type }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        type={type}
        name={name}
        placeholder={label}
      />
      {error && error}
    </Container>
  );
}
