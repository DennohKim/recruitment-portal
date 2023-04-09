import Image from "next/image";
import Link from "next/link";
import { IJob } from "./PostJobModal";

function JobCard({ jobs }: { jobs: IJob[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
      {jobs.map((job) => (
        <>
         <Link href={`/jobs/${job.id}`} key={job.title}>
          <div  className="flex  gap-8 rounded-md border-2 p-4">
            <div>
              <Image
                alt="company logo"
                src={job.company_logo}
                width="100"
                height="50"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex justify-between">
                <p>{job.company}</p>
                <p className="font-light">{job.location}</p>
              </div>

              <p className="font-semibold">{job.title}</p>
              <div className="flex items-center justify-between">
                <p>
                  ${job.min_salary} - ${job.max_salary}
                </p>
                <div className="">
                  <button className="z-10 rounded-md bg-[#FA510F] px-8 py-2 text-white">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link></>
       
      ))}
    </div>
  );
}

export default JobCard;
