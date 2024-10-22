import React from 'react';
import './bookingDisplay.css';
import { QRCodeCanvas } from 'qrcode.react'; // Import QRCodeCanvas for QR generation

const BookingDisplay = (props) => {
    const { cost } = props; // Get cost from props
    const payeeUPI = "paikaraysantanu@phonepe"; // Replace with actual UPI ID
    const payeeName = "YourBusinessName";   // Replace with actual payee name

    // Construct UPI payment URL
    const upiUrl = `upi://pay?pa=${payeeUPI}&pn=${payeeName}&am=${cost}&cu=INR`;

    return (
        <div className='container'>
            <div className="qr-section">
                <h3>Scan to Pay with PhonePe</h3>
                <QRCodeCanvas value={upiUrl} size={128} />
                {/* <p>Total Cost: ₹{cost}</p> Display the cost */}
            </div>
        </div>
    );
}

export default BookingDisplay;