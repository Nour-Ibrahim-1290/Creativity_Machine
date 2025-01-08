import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate, useParams } from "react-router-dom";

import AuthImage from "../images/AuthImage.png";
import LogoImage from "../images/Logo.png";


import { connect } from "react-redux";
import { resetpassword } from "../actions/auth";
import CSRFToken from '../components/CSRFToken';


const ResetSchema = Yup.object().shape({
  new_password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Password is required'),
  confirmpassword: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match').required('Password confirm is required'),
});


function ResetPassword({ resetpassword }) {

  const { uid, token } = useParams();
  const [message, setMessage] = useState('');

  const resetForm = async (values) => {
    const { new_password } = values;
    const data = {
      new_password,
      uidb64: uid,
      token
    };
    try {
      await resetpassword(data);
      setMessage('Password reset successful');
      return <Navigate to="/" />;
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
               <Link className="block" to="/">
                                <img className="mt-10" src={LogoImage} width="95" height="75" alt="Logo"></img>
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-gray-800 dark:text-violet-300 font-bold mb-6">Create New Password</h1>
              {/* Form */}
              <Formik
                initialValues={{ new_password: '', confirmpassword: '' }}
                validationSchema={ResetSchema}
                onSubmit={resetForm}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <CSRFToken />
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1" htmlFor="new_password">
                        New Password  <span className="text-red-500">*</span>
                      </label>
                      <Field id="new_password" name="new_password" className="form-input w-full" type="password" autoComplete="on" />
                      <ErrorMessage name="new_password" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="confirmpassword">
                        Enter Password Again  <span className="text-red-500">*</span>
                      </label>
                      <Field id="confirmpassword" name="confirmpassword" className="form-input w-full" type="password" autoComplete="on" />
                      <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex justify-end mt-6">
                  <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white whitespace-nowrap">Change Password</button>
                </div>
                  </Form>
                )}
              </Formik>
              {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
          </div>
        </div>
      </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
        </div>
      </div>
    </main>
  );
}



export default connect(null, { resetpassword })(ResetPassword);
