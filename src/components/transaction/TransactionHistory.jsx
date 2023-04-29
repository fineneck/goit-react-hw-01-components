import PropTypes from 'prop-types';
import {
  ThTable,
  ThHead,
  ThList,
  ThHeadItem,
  ThBodyItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <ThTable>
      <ThHead>
        <ThList>
          <ThHeadItem>Type</ThHeadItem>
          <ThHeadItem>Amount</ThHeadItem>
          <ThHeadItem>Currency</ThHeadItem>
        </ThList>
      </ThHead>
      <tbody className="ThBody">
        {items.map(item => (
          <ThList key={item.id}>
            <ThBodyItem>{item.type}</ThBodyItem>
            <ThBodyItem>{item.amount}</ThBodyItem>
            <ThBodyItem>{item.currency}</ThBodyItem>
          </ThList>
        ))}
      </tbody>
    </ThTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
