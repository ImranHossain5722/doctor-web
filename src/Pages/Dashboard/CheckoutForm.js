import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { id } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';

const CheckoutForm = () => {
    const stripe =useStripe()
    const elements = useElements();
    const [cardError, setCardError] =useState('')
    const [clientSecret, setClientSecret]=useState('')

    useEffect(()=>{

        
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || elements){

            return
        }

        const card =elements.getElement(CardElement)
        if(card===null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });

          if (error){
              setCardError(error.message)
          }else{
              setCardError('')
          }

    }
    return (
        
        <>
        <form onSubmit={handleSubmit}>
        <CardElement/>


        <button className='btn btn-xs btn-primary mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>  

        {
            cardError && <p className='text-red-500'> {cardError}</p>
        }        
        </>
    )
};

export default CheckoutForm;