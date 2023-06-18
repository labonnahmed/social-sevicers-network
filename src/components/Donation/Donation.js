import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import DonationForm from './DonationForm';

function Payment() {
  const [stripePromise, setStripePromise] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const donateInfo = JSON.parse(sessionStorage.getItem('donateInfo')) || null;

  useEffect(() => {
    fetch('http://localhost:8000/config')
      .then(res => res.json())
      .then(data => setStripePromise(loadStripe(data.publishableKey)))
  }, []);


  useEffect(() => {
    fetch('http://localhost:8000/create-payment-intent', {
      method: 'POST',
      body: JSON.stringify(donateInfo),
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, []);

  return (
    <div className='grid md:grid-cols-2 h-screen w-screen bg-slate-100'>
      <div className='order-1 w-2/3 ml-auto mt-28 mr-6 max-md:hidden'>
        <img className='h-20 m-auto' src={logo} alt="" />
        <h1 className='font-thin text-2xl text-gray-600 py-4 px-8 ml-8 tracking-wide'>A Simple Donation can Make Earth a Better Place</h1>
      </div>
      <div className='order-1 mt-16 ml-16'>
        {stripePromise && clientSecret ?
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements> :
          <DonationForm />
        }
      </div>
    </div>
  );
}

export default Payment;
