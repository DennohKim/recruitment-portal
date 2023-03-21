// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if(req.method === "POST") {
        // const session = await getServerSession( req, res, authOptions );

        // if(!session) {
        //     res.status(401).json({ message: "Please sign in to post a job" });

        //    console.log(req.body);
        // }

         try {
           const newJob = req.body;
           // do something with the new job, e.g. save it to a database
           console.log(newJob);

           res.status(200).json({ success: true }); // send a success response back to the client
         } catch (error) {
           console.log(error);
           res.status(500).json({ error: "Internal server error" }); // send an error response back to the client
         }
        
       
    }
 
}
