import React, {useState} from 'react';

const initialState = {
    number: '',
    date_created: '',
    date_supplied: '',
    comment: '',
};

const CreateInvoice = () => {
    const [state, setState] = useState({...initialState});

    const onHandleChange = e => {
        const { name, value} = e.target;
        setState(prev => ({ ...prev, [name]: value}));
    };

    const onHandleSubmit = e => {
        e.preventDefault();
        // const user = {
        //     number: state.number, 
        //     date_created: state.date_created,  
        //     date_supplied: state.date_supplied,
        //     comment: state.comment,
        // }
    };

  return (
      <div className="createInvoice">
      <h1 className="pageTitle">Create invoice</h1>
      <form onSubmit={onHandleSubmit} >
        <label className="formLabel">
          Number:
          <input
            className="formInput"
            type="text"
            name="name"
            value={number}
            onChange={onHandleChange}
          />
          </label>
          
          <label className="formLabel">
          Supply Date:
          <input
            className="formInput"
            type="text"
            name="name"
            value={date_supplied}
            onChange={onHandleChange}
          />
          </label>
          
          <label className="formLabel">
          Invoice Date:
          <input
            className="formInput"
            type="text"
            name="name"
            value={date_created}
            onChange={onHandleChange}
          />
          </label>
          
          <label className="formLabel">
          Comment:
          <textarea 
            placeholder="Comment..." 
            type="text" 
            value={comment}
            onChange={onHandleChange}/>
          </label>

          <button className="formBtn" type="submit">Save</button>
      </form>
      </div>
  );
};

export default CreateInvoice;
