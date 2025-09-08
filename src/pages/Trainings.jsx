import React, { useEffect, useState } from 'react'
import supabase from '../../supabaseClient'
import TrainingCard from '@/components/TrainingCard'

const Trainings = () => {
  const [trainingDesc,setTrainingDesc]=useState([])
  const [error,setError]=useState([])

  const getData=async()=>{
    try{
      const {data,error}=await supabase.from('trainingtable').select('*').order('id')

      if(error){
        setError(error)
      }
      setTrainingDesc(data)
    } catch(err){
      setError(err)
    }
  }
  useEffect(()=>{getData()},[])
  return (
    <div className='p-10'>
      {console.log(trainingDesc)}
      <p className='font-bold'>Trainings</p>
      <div className='grid lg:grid-cols-2 gap-10 p-10'>
        {trainingDesc.map((training)=>(
          <div key={training.id}>
            <TrainingCard trainingData={training}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trainings