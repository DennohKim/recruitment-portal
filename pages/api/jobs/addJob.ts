import { IJob } from './../../../app/components/PostJobModal';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prismadb"
import { User } from '@prisma/client';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if(req.method === "POST") {
         const session = await getServerSession( req, res, authOptions );

        if(!session) {
            res.status(401).json({ message: "Please sign in to post a job" });

        }
        const job: IJob = req.body;

        //Get user
        const prismaUser: User | null = await prisma.user.findUnique({
          where: { email: session?.user?.email },
        });


        //Create post
         try {
          const result = await prisma.job.create({
            data: {
              userId:prismaUser.id,
              title: job.title,
              company: job.company,
              company_logo: job.companyLogo,
              location: job.location,
              min_salary: job.minSalary,
              max_salary: job.maxSalary,
              job_description: job.jobDescription,
              job_type: job.jobType,
              deadline_date: job.deadlineDate,
              responsibilities: job.responsibilities,
              qualifications: job.qualifications,
            },
          }); 
          

           res.status(200).json(result); // send a success response back to the client
           console.log(result)
         } catch (error) {
           console.log(error);
           res.status(500).json({ error: "Internal server error" }); // send an error response back to the client
         }
        
       
    }
 
}
