import React from 'react';
import InvoiceForm from './invoiceForm.js/InvoiceForm';
import user from '../db.json';
import CreateInvoice from './createInvoice/CreateInvoice';
import AddNew from './addNew/AddNew' ;

const App = () => {
  return (
    <>
      <AddNew />
      <CreateInvoice />
      <InvoiceForm items={user} />
    </>
  );
};

export default App;
