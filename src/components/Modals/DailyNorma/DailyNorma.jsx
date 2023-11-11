import theme from 'CommonStyle/theme';
import React from 'react';
import ReactModal from 'react-modal';
import css from './DailyCSS.module.css';
import { Field, Form, Formik } from 'formik';

const DailyNorma = () => {
  const fun = data => {
    return;
  };
  return (
    <ReactModal
      isOpen={true}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <h3>My daily norma</h3>
      <div>
        <p>
          For girl:<span>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p>
          For man:<span>V=(M*0,04) + (T*0,6)</span>
        </p>
      </div>
      <p>
        * V is the volume of the water norm in liters per day, M is your body
        weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </p>
      <h4>Calculate your rate:</h4>
      <Formik
        initialValues={{
          rate: '',
          weight: '',
          load: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="rate" value="girl" />
                One
              </label>
              <label>
                <Field type="radio" name="rate" value="man" />
                Two
              </label>
              <div>{values.rate}</div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <h5>Your weight in kilograms:</h5>
      <p>
        The time of active participation in sports or other activities with a
        high physical. load:
      </p>
      <div>
        <h5>The required amount of water in liters per day:</h5>
        <p>1.8 L</p>
      </div>
      <h4>Write down how much water you will drink:</h4>

      <input type="integer"></input>
    </ReactModal>
  );
};

export default DailyNorma;
