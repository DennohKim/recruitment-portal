"use client"
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export interface IJob {
  title: string;
  company: string;
  location: string;
  minSalary: number ;
  maxSalary: number;
  companyLogo: string;
  jobDescription: string;
  jobType: string;
  deadlineDate: Date | null;
  responsibilities: string;
  qualifications: string;
  skills: string;
  tags: string;
}

export default function PostJobModal() {


const [job, setJob] = useState<IJob>({
  title: "",
  company: "",
  location: "",
  minSalary: 0,
  maxSalary: 0,
  companyLogo: "",
  jobDescription: "",
  jobType: "full-time",
  deadlineDate: new Date(),
  responsibilities: "",
  qualifications: "",
  skills: "",
  tags: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  switch (name) {
    case "deadlineDate":
      setJob({
        ...job,
        deadlineDate: new Date(value),
      });
      break;
    case "minSalary":
      setJob({
        ...job,
        minSalary: parseInt(value, 10),
      });
      break;
    case "maxSalary":
      setJob({
        ...job,
        maxSalary: parseInt(value, 10),
      });
      break;
    default:
      setJob({
        ...job,
        [name]: value,
      });
      break;
  }
};

const { isLoading, mutate } = useMutation(async (newJob: IJob) => {
  const res = await axios.post("/api/jobs/addJob", newJob);
  return res.data;
});

const submitJob = (e: React.FormEvent) => {
  e.preventDefault();

const jobItems: IJob = {
  title: job.title,
  company: job.company,
  location: job.location,
  minSalary: job.minSalary,
  maxSalary: job.maxSalary,
  companyLogo: job.companyLogo,
  jobDescription: job.jobDescription,
  jobType: job.jobType,
  deadlineDate: job.deadlineDate,
  responsibilities: job.responsibilities,
  qualifications: job.qualifications,
  skills: job.skills,
  tags: job.tags,
};
  mutate(jobItems);
  setJob({
    title: "",
    company: "",
    location: "",
    minSalary: 0,
    maxSalary: 0,
    companyLogo: "",
    jobDescription: "",
    jobType: "",
    deadlineDate: new Date(),
    responsibilities: "",
    qualifications: "",
    skills: "",
    tags: "",
  });
};


  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-5"
        className="btn border-2 border-[#FA510F] bg-white font-normal text-[#FA510F] hover:border-[#FA510F] hover:bg-[#FA510F] hover:text-white"
      >
        Post a Job
      </label>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-4xl">
          <label
            htmlFor="my-modal-5"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="pb-6 text-2xl font-bold">Post a job</h3>
          <form onSubmit={submitJob}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <div>
                  <label className="label">
                    <span className="label-text">Job Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Company</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    name="company"
                    onChange={handleChange}
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Company Logo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company logo"
                    name="companyLogo"
                    onChange={handleChange}
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <div className="">
                  <label className="label">
                    <span className="label-text">Job Description</span>
                  </label>
                  <textarea
                    name="jobDescription"
                    onChange={handleChange}
                    className="textarea-bordered textarea h-24 w-full"
                    placeholder="Bio"
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt text-gray-400">
                      Use a comma to separate
                    </span>
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Job Type</span>
                  </label>
                  <select
                    name="jobType"
                    onChange={handleChange}
                    className="select-bordered select w-full"
                  >
                    <option selected>Pick One</option>
                    <option>Part Time</option>
                    <option>Full Time</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Deadline Date</span>
                  </label>
                  <input
                    type="date"
                    name="deadlineDate"
                    onChange={handleChange}
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <div>
                  <label className="label">
                    <span className="label-text">Responsibilities</span>
                  </label>
                  <textarea
                    className="textarea-bordered textarea h-24 w-full"
                    placeholder="Responsibilities"
                    name="responsibilities"
                    onChange={handleChange}
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt text-gray-400">
                      Use a comma to separate
                    </span>
                  </label>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Qualifications</span>
                  </label>
                  <textarea
                    className="textarea-bordered textarea h-24 w-full"
                    placeholder="Qualifications"
                    name="qualifications"
                    onChange={handleChange}
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt text-gray-400">
                      Use a comma to separate
                    </span>
                  </label>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Skills</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Skills"
                    name="skills"
                    onChange={handleChange}
                    className="input-bordered input w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-400">
                      Use a comma to separate
                    </span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <div>
                  <label className="label">
                    <span className="label-text">Minimum Salary</span>
                  </label>
                  <input
                    type="number"
                    placeholder="20000"
                    onChange={handleChange}
                    name="minSalary"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Maximum Salary</span>
                  </label>
                  <input
                    type="number"
                    placeholder="200000"
                    onChange={handleChange}
                    name="maxSalary"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company location"
                    onChange={handleChange}
                    name="location"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Tags</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tags"
                    onChange={handleChange}
                    name="tags"
                    className="input-bordered input w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-400">
                      Use a comma to separate
                    </span>
                  </label>
                </div>
                <div></div>
                <div>
                  <button
                    type="submit"
                    className="btn-wide btn border-none bg-[#FA510F] flex items-center text-white"
                  >
                    Post Job
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

