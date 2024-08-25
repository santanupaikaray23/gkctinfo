import { useState } from "react";
import { useParams } from 'react-router-dom';
import "./placeBooking.css";
import Spinner from "../spinner/spinner";
import swal from 'sweetalert';

export default function PlaceBooking() {
    const { item_name } = useParams();
    const [user, setUser] = useState({
        item_name: item_name,
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");  // State to manage validation errors

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });

        // Validate phone number in real-time
        if (name === 'phone') {
            validatePhone(value);
        }
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // Only allows 10-digit numbers
        if (!phoneRegex.test(phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return false;
        } else {
            setError(''); // Clear error if validation passes
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prevent submission if phone number is invalid
        if (!validatePhone(user.phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }

        try {
            setLoading(true);
            const response = await fetch('https://node-api-freelance.onrender.com/addUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('User data submitted successfully');
                swal("Submitted Successfully");
                setUser({
                    item_name: item_name,
                    name: "",
                    email: "",
                    phone: ""
                });
            } else {
                console.error('Error submitting user data');
            }
        } catch (error) {
            console.error('An error occurred during the fetch:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                {item_name}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ଆପଣଙ୍କ ନାମ ଏଣ୍ଟର କରନ୍ତୁ । :</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        id="name"
                        required
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInput}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>ଆପଣଙ୍କ Email Address ଏଣ୍ଟର କରନ୍ତୁ । :</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        id="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>ଆପଣଙ୍କ ଫୋନ ନମ୍ବର ଏଣ୍ଟର କରନ୍ତୁ । :</label>
                    <input
                        type="tel"  // Use "tel" type for phone numbers
                        name="phone"
                        placeholder="phone"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                        className="form-control"
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button type="submit" className="btn btn-success" disabled={loading || error}>
                    {loading ? 'Submitting Plz Wait...' : 'Submit'}
                </button>
            </form>
            {loading && (
                <div className="fullscreen-loader">
                    <Spinner />
                </div>
            )}
        </div>
    );
}