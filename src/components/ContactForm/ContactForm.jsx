import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const initValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={initValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          <p>Name</p>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameId}
          ></Field>
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label} htmlFor={phoneId}>
          <p>Number</p>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={phoneId}
          ></Field>
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
