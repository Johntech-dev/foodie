import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"


const Modal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div>
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
  <div className="modal-box">
    <div className="modal-action flex flex-col justify-center  mt-0">

    <form  onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
        <h3 className='font-bold text-lg'>Please Login</h3>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
          placeholder="email" 
          className="input input-bordered" 
          required
          {...register("example")}
          />
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label mt-1">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
         {/*  error */}


          {/* Login button */}
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Login' className='btn bg-green text-white' />
        </div>
        <p className='text-center my-2'>Do not have an account?<Link to={'/signup'} className='underline text-red ml-1'>Sign up now</Link></p>
      </form>
       {/* social sign in */}
      <div className='text-center space-x-3 mb-5'>
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaGoogle />
     </button>       
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaFacebook />
     </button>       
      <button className="btn btn-circle hover:bg-green hover:text-white">
      <FaGithub />
     </button>       
      </div>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal