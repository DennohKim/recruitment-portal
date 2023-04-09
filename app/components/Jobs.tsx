import prisma from "../../lib/prismadb";
import JobCard from "./JobCard";
import { IJob } from "./PostJobModal";

const fetchJob = async (): Promise<IJob[]> => {
  const jobs = await prisma.job.findMany({
    select: {
      id: true,
      title: true,
      company: true,
      location: true,
      min_salary: true,
      max_salary: true,
      company_logo: true,
      tags: true,
    },
  });

  return jobs;
};

const Jobs = async () => {
  const jobs = await fetchJob();

  return (
    <>
      <div className="relative mx-auto w-full max-w-[1440px] my-16 border-t-2">
        <h2 className="text-xl font-bold py-10">Jobs</h2>
        <JobCard jobs={jobs} />
      </div>
    </>
  );
};

export default Jobs;
