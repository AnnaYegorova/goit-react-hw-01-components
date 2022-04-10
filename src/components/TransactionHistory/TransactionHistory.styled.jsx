import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  background-color: #f5f6f7;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: block;
  width: 600px;
  height: auto;
`;
export const TableHead = styled.thead`
  background-color: grey;
`;
export const TitleRow = styled.tr``;

export const TitleHead = styled.th`
  color: white;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 4px;
  width: 200px;
  height: 30px;
`;
export const TableBody = styled.tbody`
  background-color: grey;
`;
export const TableRow = styled.tr`
  background-color: #e4e6eb;
  &:nth-of-type(odd) {
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  color: #787877;
  font-weight: 400;
  font-size: 12px;
`;
