import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate } from "react-router-dom";


import AuthImage from "../images/AuthImage.png";
import LogoImage from "../images/Logo.png";

import { connect } from "react-redux";
import { register } from "../actions/auth";
import CSRFToken from '../components/CSRFToken';



const SignupSchema = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Required'),
	gender: Yup.string().required('Required'),
	IQ: Yup.number().positive('IQ must be a positive number').integer('IQ must be an integer'),
	password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Password is required'),
	confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirm is required'),
});




function Signup({ register, isAuthenticated }) {
	const [accountCreated, setAccountCreated] = useState(false);


	const LoginForm = async (formData) => {	
		const registerData = {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			age: formData.age,
			country: formData.country,
			city: formData.city,
			gender: formData.gender,
			IQ: formData.IQ,
			password: formData.password,
		}
	
		console.log("RegisterAction");
	
		register(registerData);
		setAccountCreated(true);
	}

	
	if (isAuthenticated)
		return <Navigate to='/machine/welcome' />;
	else if (accountCreated) 
		return <Navigate to="/" />;

	return (
		<main className="bg-white dark:bg-gray-900 min-h-screen">
			<div className="relative md:flex">
				{/* Content */}
				<div className="md:w-1/2">
					<div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
						{/* Header */}
						<div className="flex-1">
							<div className="flex items-center justify-left h-16 px-2 sm:px-6 lg:px-8">
								{/* Logo */}
								<Link className="block" to="/">
									<img className="mt-10" src={LogoImage} width="95" height="75" alt="Logo"></img>
								</Link>
							</div>
						</div>

						<div className="max-w-sm mx-auto w-full px-4 py-8 overflow-y-auto mt-10">
							<h1 className="text-3xl text-gray-800 dark:text-violet-300 font-bold mb-6">
								Join Our Creative SQUD</h1>
							{/* Form */}
							<Formik
									initialValues={{
										name: '',
										email: '',
										phone: '',
										age: '',
										gender: '',
										country: '',
										city: '',
										IQ: '',
										password: '',
										confirmpassword: '',
									}}
									validationSchema={SignupSchema}
									onSubmit={(values) => {
										//console.log(values);
										LoginForm(values);
									}}
								>
									{({ isSubmitting }) => (
										<Form>
											<CSRFToken />
											<div className="space-y-4 text-violet-100">
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="name">
														Full Name <span className="text-red-500">*</span>
													</label>
													<Field id="name" name="name" className="form-input w-full" type="text" />
													<ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
												</div>
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="email">
														Email Address <span className="text-red-500">*</span>
													</label>
													<Field id="email" name="email" className="form-input w-full" type="email" />
													<ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
												</div>
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="phone">
														Mobile/WhatsApp
													</label>
													<Field id="phone" name="phone" className="form-input w-full" type="phone" />
													<ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
												</div>
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="age">
														Age <span className="text-red-500">*</span>
													</label>
													<Field id="age" name="age" className="form-input w-full" type="number" min="1"/>
													<ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
												</div>
												
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="gender">
														Gender <span className="text-red-500">*</span>
													</label>
													<Field as="select" id="gender" name="gender" className="form-select w-full dark:bg-violet-400 dark:text-gray-900 ">
														<option value="">Select a gender</option>
														<option value="male">Male</option>
														<option value="female">Female</option>
													</Field>
													<ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
												</div>
												
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="country">
														Country 
													</label>
													<Field id="country" name="country" className="form-input w-full" type="text" />
													<ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
												</div>
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="city">
														City 
													</label>
													<Field id="city" name="city" className="form-input w-full" type="text" />
													<ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
												</div>

												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="IQ">
														IQ score (if avilable) 
													</label>
													<Field id="IQ" name="IQ" className="form-input w-full" type="number" min="1"/>
													<ErrorMessage name="IQ" component="div" className="text-red-500 text-sm" />
												</div>
												
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="password">
														Password  <span className="text-red-500">*</span>
													</label>
													<Field id="password" name="password" className="form-input w-full" type="password" autoComplete="on" />
													<ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
												</div>
												<div>
													<label className="block text-sm font-medium mb-1" htmlFor="confirmpassword">
														Enter Password Again  <span className="text-red-500">*</span>
													</label>
													<Field id="confirmpassword" name="confirmpassword" className="form-input w-full" type="password" autoComplete="on" />
													<ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm" />
												</div>
											</div>

											<div className="flex items-center justify-between mt-6">
												<button type="submit" className="btn cursor-pointer bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-violet-300 ml-3 whitespace-nowrap font-bold" disabled={isSubmitting}>
													Sign Up
												</button>
											</div>
										</Form>
									)}
								</Formik>
							{/* Footer */}
							<div className="pt-5 mt-6 border-t border-gray-100 dark:border-gray-700/60 dark:text-violet-100">
								<div className="text-sm">
									Have an account?{" "}
									<Link className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" to="/signin">
										Sign In
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
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps, { register })(Signup);
