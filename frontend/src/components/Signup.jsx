import React, { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    
  }

  const handleChange = (e) =>{
    setInputs({...inputs,[e.target.name]: e.target.value});
  }

  return (
    <>
      <section class="text-white bg-black body-font h-full">
        <div class="container  px-5 py-24  flex flex-wrap justify-center items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font ml-6 font-medium text-3xl text-gr-900">
              Welcome to Mern_Auth_App
            </h1>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-100 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-100">
                  Full Name
                </label>
                <input
                    value={inputs.fullname}
                    onChange={handleChange}
                    type="text"
                    id="fullname"
                    name="fullname"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="user-name" class="leading-7 text-sm text-gray-100">
                  User Name
                </label>
                <input
                    value={inputs.username}
                    onChange={handleChange}
                  type="text"
                  id="username"
                  name="username"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-100">
                  Password
                </label>
                <input
                    value={inputs.password}
                    onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="confirm-password"
                  class="leading-7 text-sm text-gray-100"
                >
                  Confirm Password
                </label>
                <input
                    value={inputs.confirmPassword}
                    onChange={handleChange}
                  type="confirmPassword"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="gender" class="leading-7 text-sm text-gray-100">
                  Gender(M/F)
                </label>
                <input
                value={inputs.gender}
                onChange={handleChange}
                  type="text"
                  id="gender"
                  name="gender"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
               type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            </form>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
