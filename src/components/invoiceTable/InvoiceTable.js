import React from 'react';

import AddNew from '../addNew/AddNew';
import InfoListItem from '../infoListItem/InfoListItem'


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
              <InfoListItem item={item} key={item._id} />
            ))}
            
            {infoLS && infoLS.map(item =>( 
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


