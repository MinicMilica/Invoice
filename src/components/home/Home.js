import Button from '../button/Button';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import ListInvoices from '../listInvoice/ListInvoices';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/invoice', { replace: false });
  };
  return (
    <div className="containerHome">
      <div className="leftSide">
        <h1 className="homeTitle">Create an invoice, quickly and easily.</h1>
        <div className="buttonDiv">
          <Button text="New inovice" onClick={handleClick} />
        </div>
      </div>
      <div className="rightSide">
        <h3 className="title">List invoices</h3>
        <ListInvoices />
      </div>
    </div>
  );
};

export default Home;
