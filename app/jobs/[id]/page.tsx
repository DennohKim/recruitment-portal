
import prisma from "../../../lib/prismadb";
import Title from "./components/Title";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  min_salary: number;
  max_salary: number;
  company_logo: string;
  tags: string[];
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
      tags: true,
    },
  });

  if (!job) {
    throw new Error("job not found");
  }

  return job;
};

const JobDetails = async ({params}: {params: {id: string}}) => {


  const job = await fetchJobById(params.id);
return (
  <>
  <Title title={job.title} />
  
  </>
  

)

};

export default JobDetails;
