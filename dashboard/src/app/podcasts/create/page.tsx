"use client"
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Create(e:any) {
  const [data, setData] = useState({
    title: "",
    description: "", podcastLink: "", imageLink: "",
    token:localStorage.getItem('token')
  });
  const handleSubmit = () => {
    axios.post('http://localhost:8000/api/v1/podcast/create',data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    console.log('hello')
  }
 
  const handleChange = (e:any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl mx-auto">
      <div >
        <div className="border-b border-gray-900/10 pb-12 ">
          <h2 className="text-4xl font-semibold leading-7 text-gray-900">
            Add Podcasts
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="col-span-full my-8">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={data.title}
                  id=""
                  autoComplete="Title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full my-8">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  cols={5}
                  name="description"
                  id="Description"
                  onChange={handleChange}
                  value={data.description}
                  autoComplete="Description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full my-8">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Podcast link
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="podcastLink"
                  id="Podcast link"
                  onChange={handleChange}
                  value={data.podcastLink}
                  autoComplete="Podcast link"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full my-8">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Image link
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="imageLink"
                  onChange={handleChange}
                  value={data.imageLink}
                  id=""
                  autoComplete="imageLink"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link
          href='/podcasts'
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Link>
       
      </div>
      <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
    </form>
  );
}
