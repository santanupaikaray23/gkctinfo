import React, { useState } from 'react';
import axios from 'axios';
import './bookingDisplay.css';
import { QRCodeCanvas } from 'qrcode.react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const BookingDisplay = (props) => {
    const { cost } = props; // Get cost from props
    const payeeUPI = "check"; // Replace with actual UPI ID
    const payeeName = "YourBusinessName"; // Replace with actual payee name

    const [isPaymentDone, setIsPaymentDone] = useState(false); // State to confirm payment
    const history = useHistory(); // Initialize navigate function

    // Construct UPI payment URL
    const upiUrl = `upi://pay?pa=${payeeUPI}&pn=${payeeName}&am=${cost}&cu=INR`;

    // Function to send payment details to the backend
    const sendPaymentDetails = async () => {
        if (!isPaymentDone) {
            swal({
                title: "Payment Not Completed",
                text: "Please complete the payment first and confirm by checking the box.",
                icon: "warning"
            });
            return;
        }

        // Generate a unique transaction ID
        const transactionId = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;

        const paymentDetails = {
            transactionId, // Include transaction ID
            payeeUPI,
            payeeName,
            amount: cost,
            currency: "INR",
            status: "pending", // Assuming initial status is pending
        };

        try {
            const response = await axios.post("http://localhost:9600/api/payment-details", paymentDetails);
            console.log("Payment details sent:", response.data);

            // Show SweetAlert success message with transaction ID and redirect to home page on confirmation
            swal({
                title: "Payment Successful!",
                text: `Please save your Transaction ID:\n ${transactionId}`,
                icon: "success",
            }).then(() => {
                // Navigate to home page after user clicks OK
                history.push('/');
            });

        } catch (error) {
            console.error("Error sending payment details:", error);
            swal("Failed to send payment details. Please try again.");
        }
    };

    return (
        <div className='container'>
            <div className="qr-section">
                <h3>Scan to Pay with PhonePe</h3>
                <QRCodeCanvas value={upiUrl} size={128} />
                <p>Total Cost: ₹{cost}</p>
                <h5>Note:</h5>
                <p>Please check the box below after you have completed the payment.</p>
                
                {/* Checkbox for payment confirmation */}
                <label>
                    <input
                        type="checkbox"
                        checked={isPaymentDone}
                        onChange={(e) => setIsPaymentDone(e.target.checked)}
                    />
                    I have completed the payment
                </label>
                
                <button onClick={sendPaymentDetails} className="pay-button">OK</button>
            </div>
        </div>
    );
};

export default BookingDisplay;