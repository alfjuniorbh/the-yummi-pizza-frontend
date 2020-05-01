import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: block;
    width: 100%;
    font-size: 14px;
    margin-bottom: 8px;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 100%;

    &::placeholder {
      font-size: 12px;
      color: #ccc;
    }
  }
`;
