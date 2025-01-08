import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate } from "react-router-dom";

import AuthImage from "../images/AuthImage.png";
import LogoImage from "../images/Logo.png";


import { connect } from "react-redux";
import { forgetpassword } from "../actions/auth";
import CSRFToken from '../components/CSRFToken';


const ForgetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});


function ResetPasswordRequest({ forgetpassword }) {

  const forgetForm = async (emailData) => {
    forgetpassword(emailData);

    // return <Navigate to="/" />;
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
              <h1 className="text-3xl text-gray-800 dark:text-violet-300 font-bold mb-6">Reset your Password</h1>
              {/* Form */}
              <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={ForgetSchema}
                onSubmit={(values) => {
                  forgetForm(values);
                }}
              >
              <Form>
                <CSRFToken />
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                     <Field id="email" name="email" className="form-input w-full" type="email" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white whitespace-nowrap">Send Reset Link</button>
                </div>
              </Form >
            </Formik>
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



export default connect(null, { forgetpassword })(ResetPasswordRequest);
