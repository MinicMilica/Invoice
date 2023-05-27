import React, { useEffect, useState } from 'react';
import { calculateToPay } from '../../utils/functions';
import './ListItems.css';

const ListItems = ({ list, setList }) => {
  const [listItem, setListItem] = useState([]);
  const [curr, setCurr] = useState('');
  useEffect(() => {
    setListItem(list);
    setCurr(list[0]?.currency);
  }, [list]);

  const handleDeleteItem = (id) => {
    const filteredData = list.filter((item) => item.id !== id);
    setList(filteredData);
  };

  return (
    <div className="listItemContainer">
      <div className="itemGrid">
        <div className="header">Name</div>
        <div className="header">Price</div>
        <div className="header">Quantity</div>
        <div className="header">UOM</div>
        <div className="header"></div>
        {listItem.map((item) => (
          <React.Fragment key={item.id}>
            <div className="itemContainer">{item.name}</div>
            <div className="itemContainer">
              {item.price} {item.currency}
            </div>
            <div className="itemContainer">{item.quantity}</div>
            <div className="itemContainer">{item.measurementUnit}</div>
            <button
              className="buttonX"
              onClick={() => handleDeleteItem(item.id)}
            >
              X
            </button>
          </React.Fragment>
        ))}
      </div>
      <div>
        <div className="toPay">
          To pay: {calculateToPay(list)}
          {curr}
        </div>
      </div>
    </div>
  );
};

export default ListItems;
