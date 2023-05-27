import './ListInvoicesItem.css';
import { useNavigate } from 'react-router-dom';
import { calculateToPay } from '../../utils/functions';

const ListInvoicesItem = ({ invoice }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/invoice/${invoice.id}`, { replace: false });
  };
  const currentDate = new Date();
  var date = currentDate.toISOString().substring(0, 10);

  return (
    <div className="item" onClick={handleClick}>
      <div className="row">
        <h3 className="h3Item">date:</h3>
        <h4>{invoice.invoiceDate}</h4>
      </div>
      <div className="row">
        <h3 className="h3Item">name:</h3>
        <h4>{invoice.theName} </h4>
      </div>
      <div className="row">
        <h3 className="h3Item">to pay:</h3>
        <h4>
          {' '}
          {calculateToPay(invoice.listItems)}
          {invoice?.listItems[0]?.currency}
        </h4>
      </div>
      <div className="row">
        {' '}
        {date > invoice.dateOfPayment ? (
          <>
            <h3 className="h3Item">status:</h3>
            <h4 className="h3late">Late</h4>{' '}
          </>
        ) : (
          <>
            <h3 className="h3Item">status:</h3>
            <h4>{invoice.invoiceStatus} </h4>{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default ListInvoicesItem;
