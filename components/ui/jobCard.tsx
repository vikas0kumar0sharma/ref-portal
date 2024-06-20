import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot,FaRegClock } from "react-icons/fa6";
import cn from 'classnames'

type Props={
    jobPosition:string,
    type:string,
    jobType:string,
    companyName:string,
    jobLocation:string,
    batch:boolean,
    batchYear:string,
    experienceYear:string,
    postedOn:string
}

const JobCard = (props:Props) => {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className='flex flex-row items-center justify-center gap-5'>
                    <FaBuilding />
                    <h4 className="font-bold text-large">{props.companyName}</h4>
                    <p className={cn('p-1 border rounded-lg', {
                        'bg-red-400': props.type === 'Internship',
                        'bg-yellow-400': props.type === 'Full Time'
                    })}>{props.type}</p>
                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <p className="font-bold">Postion: <span className='font-normal'>{props.jobPosition}</span> </p>
                <div className='flex flex-row items-center'>
                    <FaLocationDot />  <span className='font-normal'>:{props.jobLocation}</span> 
                </div>
                <p className="font-bold">Referral applicable: <span className='font-normal'>{props.jobType==="Hiring"?"No":"Yes"}</span> </p>
                {
                    props.batch && <p className="font-bold">Batch: <span className='font-normal'>{props.batchYear}</span> </p>
                }
                {
                    props.experienceYear[0]!=='+'?<p className="font-bold">Experience: <span className='font-normal'>{props.experienceYear}</span> </p>
                                                 :null
                }
                <div className='flex flex-row items-center'>
                    <FaRegClock />  <span className='font-normal'>:{props.postedOn}</span> 
                </div>
            </CardBody>
        </Card>
    )
}

export default JobCard