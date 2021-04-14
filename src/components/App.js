import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import users from '../data/db.json';
import InvoiceTable from './invoiceTable/InvoiceTable';
import CreateInvoice from './createInvoice/CreateInvoice';

const initialState = {
  info: [],
};

const App = () => {
  const [state, setState] = useState(initialState);

  const getUser = person => {
    setState(prev => ({
      ...prev,
      info: [...prev.info, { ...person }],
    }));
  };

  useEffect(() => {
    const info = localStorage.getItem('info');
    if (info) {
      setState({ info: JSON.parse(info) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(state.info));
  }, [state.info]);

  return (
    <>
      <Route path="/" 
      exact 
      render={() => <InvoiceTable 
      items={users} 
      infoLS={state.info} 
      />} />
      <Route
        path="/create"
        exact
        render={() => <CreateInvoice getUser={getUser} />}
      />
      <Redirect to="/" />
    </>
  );
};

export default App;
