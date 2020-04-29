import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  color: #333;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #e11400;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 12px 20px;

      display: flex;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background: ${darken(0.03, '#e11400')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    text-transform: uppercase;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      font-size: 14px;
      color: #e11400;

      svg {
        margin-right: 10px;
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
    font-size: 14px;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
