import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  color: #333;
  overflow: auto;
`;
export const FormControl = styled.div`
  margin-bottom: 10px;
  button {
    background: #55b930;
    color: #fff;
    border: 0;
    border-radius: 20px;
    overflow: hidden;
    padding: 12px 20px;
    margin-top: 30px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: ${darken(0.03, '#55B930')};
    }
  }
`;

export const Row = styled.div`
  display: block;
  width: 100%;
  margin: 0;
`;
export const Col = styled.div`
  float: left;
  width: 49%;

  + div {
    margin-left: 2%;
  }
`;
