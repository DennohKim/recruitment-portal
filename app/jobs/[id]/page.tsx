import { Skill, Tag } from "@prisma/client";
import Image from "next/image";
import prisma from "../../../lib/prismadb";
import Header from "./components/Header";
import {relativeDate} from "../../../lib/relativeDate";



export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  min_salary: number | null;
  max_salary: number | null;
  deadline_date: Date;
  company_logo: string;
  job_type: string;
  job_description: string;
  responsibilities: string;
  qualifications: string;
  skills: Skill[];
  tags: Tag[];
}

const fetchJobById = async (id: string): Promise<Job> => {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      company: true,
      location: true,
      min_salary: true,
      max_salary: true,
      company_logo: true,
      deadline_date: true,
      job_type: true,
      job_description: true,
      responsibilities: true,
      qualifications: true,
      skills: true,
      tags: true,
    },
  });

  if (!job) {
    throw new Error("job not found");
  }

  return job;
};

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const job = await fetchJobById(params.id);
  return (
    <>
      <Header job={job} />
      <div className="mx-auto max-w-7xl">
        <div className="  grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <div className="col-span-2 flex flex-col ">
            <div>
              <h2 className="py-6 text-xl font-bold">Job Description</h2>
              <p className="text-neutral-500">{job.job_description}</p>
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold">Responsibilities</h2>
              <p className="text-neutral-500">{job.responsibilities}</p>
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold">Qualifications</h2>
              <p className="text-neutral-500">{job.qualifications}</p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="py-6 text-xl font-bold">About Company</h2>
              <div className="flex items-center gap-4">
                <Image
                  alt="company logo"
                  src={job.company_logo}
                  width="100"
                  height="50"
                />
                <p className="font-semibold">{job.company}</p>
              </div>
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold">Salary Range</h2>
              <p>
                ${job.min_salary} - ${job.max_salary}
              </p>
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold">Application Deadline</h2>
              <p>{relativeDate(job.deadline_date)}</p>
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold">Required Skills</h2>
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold">Tags</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
