import React from 'react';
import { useHistory } from 'react-router';

const AddNew = () => {
  const history = useHistory();
  const onHandleNew = () => history.push('/create');

  return (
    <section className="actionBtn">
      <p className="actionTitle">Actions</p>
      <button className="formBtn" type="button" onClick={onHandleNew}>
        Add new
      </button>
    </section>
  );
};

export default AddNew;
