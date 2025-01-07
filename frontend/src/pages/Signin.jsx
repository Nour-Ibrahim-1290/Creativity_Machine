import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate } from 'react-router-dom';


import AuthImage from "../images/AuthImage.png";
import LogoImage from "../images/Logo.png";

import { connect } from "react-redux";
import { login } from "../actions/auth";
import CSRFToken from '../components/CSRFToken';



const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});




function Signin({ login, isAuthenticated }) {

  // const [loggedIn, setLoggedIn] = useState(false);

  const LoginForm = async (loginData) => {
    // Handle form submission
    console.log(loginData);
  
    // const response = await axios.post(`${config.serverUrl}/users/login/`, values);
    // if (response.status >= 200 && response.status < 300) {
    //     console.log('Sign In Successfully!');
    //     localStorage.setItem('userData', JSON.stringify(response.data));
    //     navigate('/machine/welcome');
    // } else {
    //     // Handle the case where the first request was not successful
    //     console.error('There was a Problem Signing in to Account!');
    // }
    login(loginData);
    // setLoggedIn(true);
  };

  if (isAuthenticated)
    return <Navigate to="/machine/welcome" />;

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
              <h1 className="text-3xl text-gray-800 dark:text-violet-300 font-bold mb-6">Welcome back!</h1>
              {/* Form */}
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={SigninSchema}
                onSubmit={(values) => {
                  LoginForm(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <CSRFToken />
                    <div className="space-y-4 text-violet-100">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                          Email Address
                        </label>
                        <Field id="email" name="email" className="form-input w-full" type="email" />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="password">
                          Password
                        </label>
                        <Field id="password" name="password" className="form-input w-full" type="password" autoComplete="on" />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="mr-1 dark:text-violet-200">
                        <Link className="text-sm underline hover:no-underline" to="/reset-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <button type="submit" className="btn cursor-pointer bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-violet-300 ml-3 whitespace-nowrap font-bold" disabled={isSubmitting}>
                        Sign In
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-gray-100 dark:border-gray-700/60 dark:text-violet-200">
                <div className="text-sm">
                  Don’t you have an account?{" "}
                  <Link className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" to="/signup">
                    Sign Up
                  </Link>
                </div>
              </div>
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Signin);
