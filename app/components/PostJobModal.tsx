

import React from "react";

export default function PostJobModal() {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-5"
        className="btn border-2 border-[#FA510F] hover:border-[#FA510F] hover:text-white hover:bg-[#FA510F] font-normal bg-white text-[#FA510F]"
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
          <form>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <div>
                  <label className="label">
                    <span className="label-text">Job Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Company</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Company Logo</span>
                  </label>
                  <input
                    type="file"
                    className="file-input-bordered file-input w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <div className="">
                  <label className="label">
                    <span className="label-text">Job Description</span>
                  </label>
                  <textarea
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
                  <select className="select-bordered select w-full">
                    <option disabled selected>
                      Pick One
                    </option>
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
                    placeholder="Type here"
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
                    placeholder="Type here"
                    multiple
                    name="skills[]"
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
                    <span className="label-text">Tags</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    multiple
                    name="tags[]"
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
                    className="btn-wide btn border-none bg-[#FA510F] text-white"
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

/*

*/
