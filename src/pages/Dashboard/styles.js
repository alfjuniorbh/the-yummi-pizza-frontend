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

export const Order = styled.ul`
  width: 100%;
  li {
    display: flex;
    width: 100%;
    height: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px 22px 0px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;

    small {
      padding: 5px 20px;
      border-radius: 20px;
      color: #fff;
      font-weight: 400;
      background: #e11400;
    }
  }

  + ul {
    margin-top: 30px;
    border-top: 1px solid #eee;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px 0px;
    text-transform: uppercase;
  }

  tbody td {
    padding: 0px;
    border-bottom: 1px solid #eee;
    .text-right {
      text-align: right;
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
    justify-content: center;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  width: 100%;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
