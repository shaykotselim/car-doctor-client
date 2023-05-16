import React, { useContext } from "react";
import logoimg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {

  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  console.log(from);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log( email, password);

        signIn(email,password)
        .then(result=>{
          const user = result.user
          const loggedUser = {
            email:user.email
          }  
          console.log(loggedUser);
          
          fetch('http://localhost:5000/jwt',{
            method: 'POST',
            headers: {
              'content-type': 'application/json' 
            },
            body: JSON.stringify(loggedUser)
          })
          .then(res=>res.json())
          .then(data => {
            console.log('jwt response', data);
            //warning localStorage is not best way
            localStorage.setItem('car-access-token', data.token);
            navigate(from, {replace: true}); 
          })
        })
        .catch(error=>{
          console.log(error.message);
        })
    }

  return (
    <div className="py-28 min-h-screen bg-base-200">
      <div className=" lg:flex px-4 lg:px-28 ">
        <div className=" w-full">
          <img src={logoimg} alt="" />
        </div>
        <div className=" rounded-xl flex sm:w-full shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
            <p className="text-center text-3xl font-bold text-orange-500">Sign-In</p>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div>
                <p>New to Car Doctor's <Link className="font-bold text-orange-500" to="/sign-up">Sign-Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
