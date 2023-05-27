import { useEffect, useState } from 'react';
import AddItem from '../addItem/AddItem';
import Button from '../button/Button';
import DataTable from '../dataTable/DataTable';
import ListItems from '../listItem/ListItems';
import './Invoice.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listItem, setListItem] = useState([]);
  const today = new Date();
  const date = today.toISOString().substring(0, 10);
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  const initialDataList = {
    id: '',
    invoiceDate: date,
    timeOfIssue: time,
    dateOfPayment: date,
    dateOfDelivery: date,
    theName: '',
    address: '',
    email: '',
    callNumber: '',
    methodOfPayment: 'Cash payment',
    nvoiceStatus: 'Paid',
    Note: '',
  };
  const [dataList, setDataList] = useState(initialDataList);

  const handleSaveAndSend = () => {
    handleSave();
  };

  const handleSave = () => {
    navigate('/', { replace: false });
    const data = dataList;
    data.listItems = listItem;
    var requestOptions = {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    fetch(
      id
        ? `http://localhost:3030/inovices/${id}`
        : 'http://localhost:3030/inovices',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    if (id) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(`http://localhost:3030/inovices/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setListItem(result.listItems);
          delete result.listItems;
          setDataList(result);
        })
        .catch((error) => console.log('error', error));
    }
  }, [id]);

  return (
    <div className="container">
      <div className="invoiceContainer">
        <div className="table">
          <DataTable setDataList={setDataList} dataList={dataList} />
        </div>
        <div className="rightContainer">
          <div>
            <h3 className="titleitems">List items</h3>
            <ListItems list={listItem} setList={setListItem} />
          </div>
          <div className="add">
            <AddItem setListItem={setListItem} />
          </div>
        </div>
      </div>
      <div className="buttonsDiv">
        <Button text={'Save'} onClick={handleSave} />
        <Button text={'Save and Sand'} onClick={handleSaveAndSend} />
      </div>
    </div>
  );
};

export default Invoice;
