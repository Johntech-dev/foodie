import React, { useContext, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {


  const  [errorMessage , setErrorMessage] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {createUser, login} = useContext(AuthContext);
          // redirecting to home page or specifig page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        createUser(email, password).then((result) => {
          // Signed up  
          const user = result.user;
          alert("Account creation successfully done!")
          document.getElementById("my_modal_5").close()
          navigate(from, {replace: true})

          if (password.length < 8) {
            setErrorMessage("password must be more than 8 characters")
          } 
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage("Check Internet connection")
        })
      }
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Create A Account!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
            </div>

            {/* error */}
            {
              errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
            }

            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-green text-white"
              />
            </div>

            <p className="text-center my-2">
              Have an account?{" "}
              <button className="underline text-red ml-1"
               onClick={() => document.getElementById("my_modal_5").showModal()}
              >
                Login
              </button>{" "}
            </p>

            <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</Link>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
            </button>
          </div>
        </div>
        <Modal/>
    </div>
  )
}

export default Signup