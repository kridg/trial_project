import JobCard from '@/components/JobCard'
import React from 'react'

import { useEffect, useState } from 'react'
import supabase from '../../supabaseClient'
import AddJobForm from '@/components/AddJobForm'
import { Button } from "@/components/ui/button"

import { Popover } from '@base-ui-components/react/popover';
import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router'


const JobDashboard = () => {
    const navigate=useNavigate()
    const { session } = useAuth()
    
    // console.log(session)

    const [jobDesc, setJobDesc] = useState([])
    const [err, setErr] = useState()

    const fetchData = async () => {
        if (session==null){
        navigate('/login')
    }
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
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Job Listings</p>
                <Popover.Root>
                    {/* use Dialog from shadcn next time */}
                    <Popover.Trigger className="flex p-2 items-center justify-center rounded-md border-gray-200 bg-gray-50 text-black font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:-outline-offset-1 active:bg-gray-100 data-[popup-open]:bg-gray-100">
                        Add Job
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Positioner>
                            <Popover.Popup className="origin-[var(--transform-origin)] rounded-lg bg-[canvas] px-6 py-4 text-gray-900 shadow-lg shadow-gray-200 outline  outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                                <Popover.Close className='absolute right-2'>x</Popover.Close>
                                <Popover.Title className="text-base font-medium">
                                    Add Job Form
                                </Popover.Title>
                                <Popover.Description className="text-base text-gray-600">
                                    <AddJobForm />
                                </Popover.Description>
                                
                            </Popover.Popup>
                        </Popover.Positioner>
                    </Popover.Portal>
                </Popover.Root>

            </div>
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

// popover popup 
