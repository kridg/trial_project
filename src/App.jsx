
import reactLogo from './assets/react.svg'

import './App.css'
import { useEffect, useState } from 'react'
import supabase from '../supabaseClient'
import JobCard from './components/JobCard'

const App = () => {
  const [jobDesc, setJobDesc] = useState([])
  const [err, setErr] = useState()

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('jobdesctable').select('*').order("id");

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
    <div className='min-h-screen bg-gray-50 p-10'>
      <div className="max-w-5xl mx-auto">
        <div className='flex justify-between items-center'>
          <p className='font-bold'>Latest Jobs</p>

        </div>
        {console.log(jobDesc)}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobDesc.map((job) => (
            <div key={job.id}>
              <JobCard jobData={job} />
            </div>
          ))}
        </div>
      </div>



    </div>
  )
}


export default App

// className='flex flex-wrap gap-5'
