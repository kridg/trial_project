import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const TrainingCard = ({trainingData}) => {
    return (
        <div>
            <Card className="w-[500px] h-fit p-5 rounded-xl hover:shadow-lg">
                <CardHeader>
                    <CardTitle>{trainingData.title}</CardTitle>
                    <CardDescription>Duration(in months):{trainingData.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                    {trainingData.subTitle}
                </CardContent>
                <CardFooter > 
                    <div className='flex flex-col'>
                        <p className='font-semibold'>Skills you will learn: </p>
                        {trainingData.skills} 
                    <div>
                        <CardAction className="bg-gray-700 text-white p-2 rounded-3xl flex justify-self-end">Apply for training</CardAction>
                    </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default TrainingCard