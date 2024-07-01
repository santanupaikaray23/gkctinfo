import { useState } from "react";
import "./ContactSearch.css";
import Spinner from "../components/pages/spinner/spinner";
import swal from 'sweetalert';

export default function ContactSearch(){
    const [user, setUser] = useState({
        name: "", // Directly use check_name obtained from useParams
        email: "",
        phone:"",
        message: "",
      
       
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
            const response = await fetch('https://node-api-freelance.onrender.com/addcontacts', {
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
                    name:"",
                    email: "",
                    phone: "",
                    message:""
                    
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
                 ଆମକୁ ଯୋଗା ଯୋଗ କରନ୍ତୁ ।
                </div>
            <form onSubmit={handleSubmit}>
                {/* The rest of your form */}
                <div className="form-group">
                <label>ଆପଣଙ୍କ ନାମ ଏଣ୍ଟେର କରନ୍ତୁ ।:</label>
                 <input type="name" name="name" placeholder="name" id="name" required autoComplete="off"
                 value={user.name} onChange={handleInput} className="form-control"/>
                 </div>
                <div className="form-group">
                <label>ଆପଣଙ୍କ Email Address ଏଣ୍ଟେର କରନ୍ତୁ ।:</label>
                 <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                 value={user.email} onChange={handleInput} className="form-control"/>
                 </div>
                 <div className="form-group">
                <label>ଆପଣଙ୍କ ଫୋନ ନମ୍ବର ଏଣ୍ଟର କରନ୍ତୁ ।:</label>
                 <input type="phone" name="phone" placeholder="phone" id="phone" required autoComplete="off"
                 value={user.phone} onChange={handleInput} className="form-control"/>
                 </div>
                 <div className="form-group">
                <label>ଆପଣଙ୍କ Message ଏଣ୍ଟର କରନ୍ତୁ ।:</label>
                 <input type="message" name="message" placeholder="message" id="message" required autoComplete="off"
                 value={user.message} onChange={handleInput} className="form-control"/>
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