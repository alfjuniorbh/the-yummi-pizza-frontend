import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (min-width: 700px) and (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 601px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 0px;
    padding: 20px;
    min-height: 350px;

    img {
      align-self: center;
      max-width: 150px;
    }

    > strong {
      font-size: 16px;
      color: #333;
      margin-top: 10px;
      text-align: center;
      float: left;
      width: 100%;
      height: 30px;
    }

    > small {
      font-size: 12px;
      line-height: 20px;
      color: #999;
      margin-top: 5px;
      margin: auto;
      text-align: center;
    }

    > p {
      margin: 10px 0 20px;
      text-align: center;

      span {
        font-size: 21px;
        line-height: 20px;
        color: #333;
        + span {
          margin-left: 10px;
          padding-left: 10px;
          border-left: 1px solid #333;
        }
      }
    }

    button {
      background: #e11400;
      color: #fff;
      border: 0;
      border-radius: 20px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background: ${darken(0.03, '#e11400')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
`;
