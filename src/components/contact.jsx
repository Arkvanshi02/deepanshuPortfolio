import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useForm } from "react-hook-form";


const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) =>{
     const userData ={
      name:data.name,
      email:data.email,
      phone:data.phone,
      message:data.message
     }
      try{
       await axios.post("https://getform.io/f/apjnjvxa", userData)
       toast.success("your data has been submitted")
      }catch(err){
        console.log(err);
        toast.error("something Went Wrong")
      }
  } 

  return (
    
    <div name="Contact">
         
    <div className="flex items-center justify-center p-12 my-12">
  {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
  <div className="mx-auto w-full max-w-[550px]">
  <h1 className='my-4 text-2xl text-center'><u>Contact Us</u></h1>
    <form 
    // action="https://getform.io/f/apjnjvxa" 
    //  method="POST"
    onSubmit={handleSubmit(onSubmit)}
     className='border-2 rounded-lg p-3'>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
              {errors.name && <span>This field is required</span>}

      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input  {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
          {errors.email && <span>This field is required</span>}
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Mobile
        </label>
        <input {...register("phone", { required: true })}
          type="tel"
          name="phone"
          id="mobile"
          placeholder="Enter your Mobile number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
         {errors.phone && <span>This field is required</span>}
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea {...register("message", { required: true })}
        type="text"
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
         {errors.message && <span>This field is required</span>}

      </div>
      <div>
        <button type='submit'
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Contact;
