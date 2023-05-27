import { useState } from 'react';
import { invoiceStatus, methodOfPayment } from '../../utils/constants';
import Input from '../input/Input';
import './DataTable.css';

const DataTable = ({ dataList, setDataList }) => {
  const currentDate = new Date();
  var date = currentDate.toISOString().substring(0, 10);
  const [dateValue, setDateValue] = useState(date);

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="tableContainer">
        <Input
          text={'Invoice number:'}
          type={'text'}
          value={dataList.id}
          handleChange={(e) => setDataList({ ...dataList, id: e.target.value })}
        />

        <Input
          text={'Invoice date:'}
          type={'date'}
          value={dataList.invoiceDate}
          handleChange={(e) => {
            setDateValue(e.target.value);
            setDataList({ ...dataList, invoiceDate: dateValue });
          }}
        />

        <Input
          text={'Time of issue:'}
          type={'time'}
          value={dataList.timeOfIssue}
          handleChange={(e) =>
            setDataList({ ...dataList, timeOfIssue: e.target.value })
          }
        />

        <Input
          text={'Date of Payment:'}
          type={'date'}
          value={dataList.dateOfPayment}
          handleChange={(e) => {
            setDateValue(e.target.value);
            setDataList({ ...dataList, dateOfPayment: dateValue });
          }}
        />

        <Input
          text={'Date of delivery:'}
          type={'date'}
          value={dataList.dateOfDelivery}
          handleChange={(e) => {
            setDateValue(e.target.value);
            setDataList({ ...dataList, dateOfDelivery: dateValue });
          }}
        />

        <Input
          text={"The name of the client or the client's company:"}
          type={'text'}
          value={dataList.theName}
          handleChange={(e) =>
            setDataList({ ...dataList, theName: e.target.value })
          }
        />

        <Input
          text={'Client or company address:'}
          type={'text'}
          value={dataList.address}
          handleChange={(e) =>
            setDataList({ ...dataList, address: e.target.value })
          }
        />

        <Input
          text={'Email address of the client or company:'}
          type={'email'}
          value={dataList.email}
          handleChange={(e) =>
            setDataList({ ...dataList, email: e.target.value })
          }
        />

        <Input
          text={'Call number:'}
          type={'text'}
          value={dataList.callNumber}
          handleChange={(e) =>
            setDataList({ ...dataList, callNumber: e.target.value })
          }
        />

        <div>
          <div className="secondContainer">
            <div className="firstDiv">
              <label htmlFor="label9">Method of payment:</label>
            </div>
            <div className="secondDiv">
              <div>
                <select
                  value={dataList.methodOfPayment}
                  onChange={(e) => {
                    handleChange(e);
                    setDataList({
                      ...dataList,
                      methodOfPayment: e.target.value,
                    });
                  }}
                >
                  <option>{methodOfPayment.CASH}</option>
                  <option>{methodOfPayment.ELECTRONIC}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="secondContainer">
            <div className="firstDiv">
              <label htmlFor="labe20">Invoice status:</label>
            </div>
            <div className="secondDiv">
              <div>
                <select
                  value={dataList.invoiceStatus}
                  onChange={(e) => {
                    handleChange(e);
                    setDataList({ ...dataList, invoiceStatus: e.target.value });
                  }}
                >
                  <option>{invoiceStatus.PAID}</option>
                  <option>{invoiceStatus.OUTSTANDING}</option>
                  <option>{invoiceStatus.LATE}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="secondContainer">
            <div className="firstDiv">
              <label htmlFor="label10">Note:</label>
            </div>
            <div className="secondDiv">
              <textarea
                className="input10"
                value={dataList.Note}
                onChange={(e) =>
                  setDataList({ ...dataList, Note: e.target.value })
                }
                rows={5}
                cols={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
