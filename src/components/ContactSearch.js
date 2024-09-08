import { useState } from "react";
import "./ContactSearch.css";
import Spinner from "../components/pages/spinner/spinner";
import swal from 'sweetalert';

export default function ContactSearch(){
    const [user, setUser] = useState({
        name: "", 
        email: "",
        phone: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInput= (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });

        if (name === 'phone') {
            validatePhone(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number before proceeding
        if (!validatePhone(user.phone)) {
            setError('ଦୟାକରି ଦଶ ଅଙ୍କ ବିଶିଷ୍ଟ ଠିକ、ଫୋନ ନମ୍ବର ଏଣ୍ଟର କରନ୍ତୁ ।');
            return; // Stop form submission if the phone number is invalid
        }

        try {
            setLoading(true);
            const response = await fetch('https://node-api-freelance.onrender.com/addcontacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                swal("Submitted Successfully");
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
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

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // Accepts 10-digit numbers only
        if (!phoneRegex.test(phone)) {
            setError('ଦୟାକରି ଦଶ ଅଙ୍କ ବିଶିଷ୍ଟ ଠିକ、ଫୋନ ନମ୍ବର ଏଣ୍ଟର କରନ୍ତୁ ।');
            return false;
        } else {
            setError(''); // Clear error if validation passes
            return true;
        }
    };

    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                ଆମକୁ ଯୋଗା ଯୋଗ କରନ୍ତୁ ।
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ଆପଣଙ୍କ ନାମ ଏଣ୍ଟେର କରନ୍ତୁ ।:</label>
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
                    <label>ଆପଣଙ୍କ Email Address ଏଣ୍ଟେର କରନ୍ତୁ ।:</label>
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
                    <label>ଆପଣଙ୍କ ଫୋନ ନମ୍ବର ଏଣ୍ଟର କରନ୍ତୁ ।:</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                        className="form-control"
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <div className="form-group">
                    <label>ଆପଣଙ୍କ Message ଏଣ୍ଟର କରନ୍ତୁ ।:</label>
                    <input 
                        type="text" 
                        name="message" 
                        placeholder="message" 
                        id="message" 
                        required 
                        autoComplete="off"
                        value={user.message} 
                        onChange={handleInput} 
                        className="form-control"
                    />
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