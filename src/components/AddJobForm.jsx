// import React from 'react'

// const AddJobForm = () => {
//   return (
//     <div>AddJobForm</div>
//   )
// }

// export default AddJobForm

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import supabase from "../../supabaseClient"
import { useAuth } from "@/context/AuthContext"


const schema = yup.object().shape({
    jobtitle: yup.string().required("Job title is required"),
    companyname: yup.string().required("Company name is required"),
    requiredskills: yup.string().required("Skills are required"),
    jobsite: yup.string().required("Job site is required"),
    date: yup.date().required("Date is required"),
})

const AddJobForm = () => {
    const { session } = useAuth()

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            jobtitle: "",
            companyname: "",
            requiredskills: "",
            date: "",
            jobsite: "",
            created_by:"",
        },
    })

    const onSubmit = async (formData) => {
        try {
            const { data, error } = await supabase
                .from('jobdesctable')
                .insert([
                    {...formData, created_by: session?.user?.id}
                ])
                .select("*")
            if(error){
                console.log("Supabase insert error",error)
            }
        }
        catch (err) {
            console.log("Error 2:",err)
        }
        console.log("Form data:", formData)
    }

    return (
        <div className="p-6 flex justify-center">
            <Card className="w-[400px]">
                {/* <CardHeader>
                    <CardTitle>Post a Job</CardTitle>
                </CardHeader> */}
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Job Title */}
                            <FormField
                                control={form.control}
                                name="jobtitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Frontend Developer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Company Name */}
                            <FormField
                                control={form.control}
                                name="companyname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Google" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Required Skills */}
                            <FormField
                                control={form.control}
                                name="requiredskills"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Required Skills</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="e.g. React, Tailwind, Supabase"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Job Site */}
                            <FormField
                                control={form.control}
                                name="jobsite"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Site</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Remote / On-site" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Date */}
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <CardFooter className="flex justify-end">
                                <Button type="submit" className="bg-gray-700 text-white">
                                    Add Job
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddJobForm
