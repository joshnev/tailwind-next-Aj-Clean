import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {};

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md font-primary"
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter your email address',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter a valid email address',
              },
            })}
            className="w-full bg-gray-200 rounded-[4px] py-1"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter your password',
              minLength: {
                value: 6,
                message: 'password requires more than 5 characters',
              },
            })}
            className="w-full bg-gray-200 rounded-[4px] py-1"
            id="password"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <button className="primary-button mt-2 hover:text-white">
          Sign In
        </button>
        <div>
          Don&apos;t have an account? &nbsp;
          <Link href="register">
            Register{' '}
            <span className="underline underline-offset-2">here...</span>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
