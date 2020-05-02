import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 20px;
    line-height: 20px;
    padding: 0px;
    margin: 50px 0;
    height: auto;
    transition: opacity 0.2s;

    a {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      img {
        float: left;
      }
      span {
        float: left;
        position: relative;
        top: 8px;
        margin-left: 7px;
      }
    }

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: top;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  transition: opacity 0.2s;

  + a {
    margin-left: 20px;
    border-left: 1px solid #ccc;
    padding-left: 20px;
  }

  :hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
