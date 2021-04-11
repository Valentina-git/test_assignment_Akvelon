import React from 'react';

const InvoiceForm = ({ items }) => {
  return (
    <div>
      <div className="invoiceForm">
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
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.date_created}</td>
                <td>{item.number}</td>
                <td>{item.date_supplied}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceForm;
