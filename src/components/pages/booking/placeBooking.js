import { useState } from "react";
import { useParams } from 'react-router-dom';
import "./placeBooking.css";
import Spinner from "../spinner/spinner";
import swal from 'sweetalert';

export default function PlaceBooking(){
    const { check_name } = useParams();
    const [user, setUser] = useState({
        check_name: check_name, // Directly use check_name obtained from useParams
        email: "",
        phone: "",
       
    });

const [loading, setLoading] = useState(false);

    const handleInput= (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
    
        try {
            setLoading(true);
            const response = await fetch('http://localhost:9600/addUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
    
            if (response.ok) {
                console.log('User data submitted successfully');

                swal("Submited Successfully");
                setUser({
                    check_name: check_name,
                    name:"",
                    email: "",
                    phone: ""
                    
                });
            } else {
                console.error('Error submitting user data');
            }
        } catch (error) {
            console.error('An error occurred during the fetch:', error);
        }finally{
            setLoading(false);
        }
    };

    return(
      
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Booking
                </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Service Name:</label>
                    <input
                        name="check_name"
                        value={check_name}
                        className="form-control"
                        readOnly
                    />
                </div>
                {/* The rest of your form */}
                <div className="form-group">
                <label> Enter your Name :</label>
                 <input type="name" name="name" placeholder="name" id="name" required autoComplete="off"
                 value={user.name} onChange={handleInput} className="form-control"/>
                 </div>
                <div className="form-group">
                <label> Enter your Email Address :</label>
                 <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                 value={user.email} onChange={handleInput} className="form-control"/>
                 </div>
                 <div className="form-group">
                <label> Enter your Phone Number :</label>
                 <input type="phone" name="phone" placeholder="phone" id="phone" required autoComplete="off"
                 value={user.phone} onChange={handleInput} className="form-control"/>
                 </div>
                 <button type="submit" className="btn btn-success" disabled={loading}>{loading ? 'Subnitting Plz Wait...':'Submit'}</button>

            </form>
            {loading && (
                <div className="fullscreen-loader">
                    <Spinner/>
                </div>
            )}
        </div>
      
    );
}