// eslint-disable-next-line no-unused-vars
import React from "react";
import { createPortal } from "react-dom";
import { formatDate } from "../utils/formatDate";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, onSubmit, isEdit }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [instance, setInstance] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const data  = {
    name,
    email,
    phone,
    instance,
    password,
    confirmPassword,
    ...(!isEdit && { createdAt: formatDate(new Date()) }),
  }

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed z-10 left-[50%] top-[50%] w-[612px] text-black bg-slate-400 -translate-x-1/2 -translate-y-1/2 rounded-xl">
      <div className="flex">
        <div className="flex mt-4">
          <h1 className="ml-12 text-2xl font-bold ">Add New Student</h1>
          <button className="ml-80" onClick={onClose}>
            X
          </button>
        </div>
      </div>
      {/* <div className="ml-10 mt-10">
            <p className="text-2xl">Full Name</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div> */}
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 px-4">
        <div>
          <label className="text-white dark:text-gray-200" htmlFor="Full Name">
            Full Name{" "}
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></input>
        </div>

        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="emailAddress"
          >
            Email
          </label>
          <input
            id="emailAddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></input>
        </div>

        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="Phone Number"
          >
            Phone Number
          </label>
          <input
            id="password"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></input>
        </div>

        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Instance
          </label>
          <select
            value={instance}
            onChange={(e) => setInstance(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option value="-">Instance</option>
            <option value="Universitas Muhammadiyah Tangerang">
              Universitas Muhammadiyah Tangerang
            </option>
            <option value="Universitas Indoensia">Universitas Indoensia</option>
            <option value="Universitas Soedirman">Universitas Soedirman</option>
          </select>
        </div>

        <div>
          <label className="text-white dark:text-gray-200" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></input>
        </div>

        <div>
          <label className="text-white dark:text-gray-200" htmlFor="password">
            Re-type Password
          </label>
          <input
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></input>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-white">
            Add Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  ></input>
                </label>
                <p className="pl-1 text-white">or drag and drop</p>
              </div>
              <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6 mr-4 mb-4">
        <button
          type="button"
          onClick={() => onSubmit(data)}
          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
        >
          Save
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
