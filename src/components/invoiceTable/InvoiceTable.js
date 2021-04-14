import React from 'react';
import AddNew from '../addNew/AddNew';
import moment from 'moment';

const InvoiceTable = ({ items, infoLS }) => {
  return (
    <div className="invoice">
      <section className="invoice-title">
        <h1>Invoices</h1>
      </section>

      <section className="invoice-addNew">
        <AddNew />
      </section>

      <section className="invoice-form">
        <table className="history">
          <caption className="history-title">Invoices</caption>
          <thead>
            <tr>
              <th>Create</th>
              <th>No</th>
              <th>Supply</th>
              <th>Comment</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item =>  (
              <tr key={item._id}>
                <td>{moment(item.date_created, 'DD-MM-YYYY').format('YYYY-MM-DD')}</td>
                <td>{item.number}</td>
                <td>{moment(item.date_supplied, 'DD-MM-YYYY').format('YYYY-MM-DD')}</td>
                <td>{item.comment}</td>
              </tr>
            )
            )}
            {infoLS.map(item => (
              <tr key={item._id}>
                <td>{item.date_created}</td>
                <td>{item.number}</td>
                <td>{item.date_supplied}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default InvoiceTable;


