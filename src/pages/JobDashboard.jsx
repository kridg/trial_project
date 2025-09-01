import JobCard from '@/components/JobCard'
import React from 'react'

import { useEffect, useState } from 'react'
import supabase from '../../supabaseClient'


const JobDashboard = () => {
    const [jobDesc, setJobDesc] = useState([])
    const [err, setErr] = useState()

    const fetchData = async () => {
        try {
            const { data, error } = await supabase.from('jobDescTable').select('*').order("ID");

            if (error) {
                setErr(error)
            }
            setJobDesc(data)
        } catch (error) {
            setErr(error)
        }
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div className='p-10'>
            <p className='font-bold'>Job Listings</p>
            {console.log(jobDesc)}
            <div className='flex flex-wrap gap-5'>
                {jobDesc.map((job) => (
                    <div key={job.ID}>
                        <JobCard jobData={job} />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default JobDashboard