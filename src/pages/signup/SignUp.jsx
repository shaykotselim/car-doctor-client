import React, { useContext } from "react";
import logoimg from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const SignUp = () => {
  const {createUser } = useContext(AuthContext)

  const handleSignUP= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .then(error=>console.log(error))
    }
  return (
    <div>
      <div className="py-28 min-h-screen bg-base-200">
        <div className=" lg:flex px-4 lg:px-28 ">
            
          <div className=" w-full">
            <img src={logoimg} alt="" />
          </div>
          <div className=" rounded-xl flex sm:w-full shadow-2xl">
            <div className="card-body">
            
              <form onSubmit={handleSignUP}>
              <p className="text-center text-3xl font-bold text-orange-500">Sign-Up</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
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
                    value="Sign-Up"
                  />
                </div>
              </form>
              <div>
                <p>
                  Have an account <Link className="font-bold text-orange-500" to="/sign-in">Sign-in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
