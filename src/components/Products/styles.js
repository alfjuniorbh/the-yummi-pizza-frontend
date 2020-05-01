import styled from 'styled-components';

export const Container = styled.div``;

export const ProductTable = styled.table`
  width: 100%;
  tbody td {
    padding: 20px 12px;
    border-bottom: 1px solid #eee;
  }
  strong {
    color: #333;
    display: block;
    font-size: 14px;
    line-height: 20px;
  }
  .align-right {
    text-align: right;
    padding-right: 0px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  margin-top: 4px;

  span {
    color: #999;
  }

  strong {
    margin-left: 5px;
  }
`;
