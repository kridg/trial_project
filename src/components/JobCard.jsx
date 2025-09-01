import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from 'react-router'

import React from 'react'

const JobCard = ({jobData}) => {
    return (
        <div className=" p-6 rounded-xl items-center "> 
            <Card className="w-[320px] h-[250px]">
            <CardHeader>
                <CardTitle>{jobData.JobTitle}</CardTitle>
                <CardDescription>{jobData.CompanyName}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Required Skills: {jobData.RequiredSkills}</p>
                
                <p className="font-light">{jobData.JobSite}</p>  
            </CardContent>
            <CardFooter className="flex justify-between">   
                <p>{jobData.Date}</p>             
                <Link to="/job-apply">
                <CardAction className="bg-gray-600 text-white p-1.5 rounded-2xl">Apply for Job</CardAction>
                </Link>
            </CardFooter>
        </Card>
        </div>
    )
}

export default JobCard

/** default card that can be used for checking the card design
 *  <div className=" p-4 rounded-xl shadow-2xs items-center "> 
            <Card className="w-[280px] h-[200px]">
            <CardHeader>
                <CardTitle>Job Title</CardTitle>
                <CardDescription>Company Name</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Required Skills</p>
            </CardContent>
            <CardFooter className="space-x-4">
                <p>Date</p>
                <p>Job-Site</p>  
                <CardAction className="bg-black text-white p-1 rounded-2xl">Apply for Job</CardAction>
            </CardFooter>
        </Card>
        </div>
 */