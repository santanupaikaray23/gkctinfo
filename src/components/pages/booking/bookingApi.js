import React from 'react';
import BookingDisplay from '../booking/bookingDisplay'; // Import the BookingDisplay component

const ParentComponent = () => {
    const bookingCost = 1000; // You can set or calculate the cost dynamically

    return (
        <div>
        <BookingDisplay cost={bookingCost} /> {/* Pass cost as prop */}
        </div>
    );
}

export default ParentComponent;