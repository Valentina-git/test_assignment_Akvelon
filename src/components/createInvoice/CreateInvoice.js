import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router';

const CreateInvoice = ({ getUser }) => {
  const history = useHistory();

  const validateSchema = yup.object().shape({
    number: yup
    .number()
    .min(3, 'at least 3 symbols')
    .integer(),
    comment: yup.string().max(160, 'no more than 160 characters'),
  });

  const onHandleGoBack = () => history.push('/');

  const onHandleSubmit = values => {
    getUser({
      ...values,
      _id: uuidv4(),
    });
  };

  return (
    <div className="createInvoice">
      <section>
        <h1 className="createInvoice-title">Create invoice</h1>
      </section>

      <section>
        <Formik
          initialValues={{
            number: '',
            date_created: '',
            date_supplied: '',
            comment: '',
          }}
          validationSchema={validateSchema}
          onSubmit={values => {
            onHandleSubmit(values);
            onHandleGoBack();
          }}
        >
          {({
            values,
          }) => {
            return (
              <Form className='form'>
                <label className="form-label">
                <span className="form-labelText">Number:</span>
                  <Field 
                    placeholder="at least 3 symbols"
                    className="form-input"
                    type="number"
                    name="number"
                    value={values.number}
                  />
                  <ErrorMessage
                    className="error"
                    name="number"
                    component="div"
                  />
                </label>

                <label className="form-label">
                <span className="form-labelText">Supply Date:</span>
                  <Field
                    className="form-input"
                    type="date"
                    name="date_supplied"
                    value={values.date_supplied}
                  />
                </label>

                <label className="form-label">
                <span className="form-labelText">Invoice Date:</span>
                  <Field
                    className="form-input"
                    type="date"
                    name="date_created"
                    value={values.date_created}
                  />
                </label>

                <label className="form-label">
                <span className="form-labelText">Comment:</span>
                  <Field
                    className="form-comment"
                    name="comment"
                    as="textarea"
                    placeholder="Comment..."
                    type="text"
                    value={values.comment}
                  />
                  <ErrorMessage
                    className="error"
                    name="comment"
                    component="div"
                  />
                </label>

                <button className="form-btn" type="submit">
                  Save
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </div>
  );
};

export default CreateInvoice;
