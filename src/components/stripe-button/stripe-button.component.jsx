import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/logosquare.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HWy5MB5vRdxeArpbf0x1J0mIq74EQSR7vojqeETaORNdVSpxYdI1udXQe6yMEuFwT6LGIHoln9NaQ1CDdpCa2CO00AOQS5txs';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Company'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;