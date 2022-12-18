import React from 'react';
import Layout from '../components/Layout';

export default function contact() {
  return (
    <Layout title="Contact">
      <div className="flex flex-col items-center font-primary">
        <h1 className="text-xl">Contact Us</h1>
        <form
          className="flex pt-2 flex-col gap-y-2"
          action="https://formsubmit.co/09b30e976ea6b8b28e37683d66bcc924"
          method="POST"
        >
          {/* Honeypot */}
          <input
            className="invisible absolute z-10"
            type="text"
            name="_honey"
          />
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Success Page */}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/success"
          />
          <input
            placeholder="Name"
            name="name"
            type="text"
            required
            className="bg-gray-100 p-2 min-w-[300px] drop-shadow-md rounded-md"
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            required
            className="bg-gray-100 p-2 min-w-[300px] drop-shadow-md rounded-md"
          />
          <input
            placeholder="Phone Number"
            type="phone"
            name="phone"
            required
            className="bg-gray-100 p-2 min-w-[300px] drop-shadow-md rounded-md"
          />
          <textarea
            placeholder="Your message"
            required
            type="text"
            name="message"
            className="bg-gray-100 drop-shadow-md rounded-md p-2 min-h-[125px]"
          />
          <button type="submit" className="primary-button">
            Send here
          </button>
        </form>
      </div>
    </Layout>
  );
}
