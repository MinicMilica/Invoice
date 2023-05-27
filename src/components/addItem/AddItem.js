import { useState } from 'react';
import Button from '../button/Button';
import './AddItem.css';
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ setListItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [quantity, setQuantity] = useState('');
  const [measurementUnit, setMeasurmentUnit] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const item = {
      id: uuidv4(),
      name,
      price,
      currency,
      quantity,
      measurementUnit,
    };
    setListItem((prev) => [...prev, item]);
  };

  return (
    <>
      <div className="columnsDiv">
        <h5>Name</h5>
        <input
          className="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="columnsDiv">
        <h5>Price</h5>
        <div>
          <input
            className="price"
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="columnsDiv">
        <h5>Currency</h5>
        <div>
          <input
            className="currency"
            type="text"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
      </div>

      <div className="columnsDiv">
        <h5>Quantity</h5>
        <input
          className="quantity"
          type="text"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="columnsDiv">
        <h5>Measurement unit</h5>
        <input
          className="measurement"
          type="text"
          name="measurementUnit"
          value={measurementUnit}
          onChange={(e) => setMeasurmentUnit(e.target.value)}
        />
      </div>
      <div className="buttonAdd">
        <Button text={'Add'} onClick={handleAdd} />
      </div>
    </>
  );
};

export default AddItem;
