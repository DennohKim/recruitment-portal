import React from 'react'
import { FaBusinessTime } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Job } from '../page';

const Header = ({job}: {job: Job}) => {
  return (
    <div className="flex h-56 items-center bg-neutral-200">
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1  md:grid-cols-2 ">
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-semibold">{job.title}</p>
          <div className="flex items-center space-x-10 ">
            <div className="flex items-center space-x-2">
              <FaBusinessTime className="text-neutral-500" />
              <p className="text-neutral-500">{job.job_type}</p>
            </div>
            <div className="flex items-center space-x-2">
              <IoLocationSharp className="text-neutral-500" />
              <p className="text-neutral-500">{job.location}</p>
            </div>
          </div>
          <div className="">
            <button className="z-10 rounded-md bg-[#FA510F] px-8 py-2 text-white">
              Apply
            </button>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Header