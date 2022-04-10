import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TitleRow,
  TitleHead,
  TableBody,
  TableRow,
  TableCell,
} from '../TransactionHistory/TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TitleRow>
          <TitleHead>Type</TitleHead>
          <TitleHead>Amount</TitleHead>
          <TitleHead>Currency</TitleHead>
        </TitleRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
