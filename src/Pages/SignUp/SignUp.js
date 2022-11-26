import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/signup/signup.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {


    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userStatus = form.user.value;

        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handleUpdateUserProfile(name, photoURL, userStatus);
            console.log(user);
            toast('SignUp Successfully.....',{position:"top-center"});
        })
        .catch(error => {console.error(error)
          toast(error.message,{position:"top-center"});
        })
    

    const handleUpdateUserProfile = (name, photoURL, userStatus) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
            userStatus: userStatus,
        }
    
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

}


    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <img className='w-2/2 rounded-2xl' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-info" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered input-success" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Image Link" className="input input-bordered input-secondary" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered input-warning" required/>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Select one</span>
                            </label>
                            <select name='user' className="select select-secondary w-full">
                                <option>Buyer</option>
                                <option>Seller</option>
                                </select>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;