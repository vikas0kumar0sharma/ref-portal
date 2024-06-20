"use client"
import React from 'react'
import { clearJobNoti } from '@/lib/actions/jobSNoti.actions'
import Image from 'next/image'

const Noti = ({ notifications}:{notifications:any}) => {

    const handleClear = (idx:any) => {
        clearJobNoti(notifications[idx].jobSeekerId,notifications[idx].JobId)
        window.location.reload()
    }

    return (
        <div className='flex flex-col gap-3 items-center'>
            {notifications.map((item:any, idx:any) => {
                return (
                    <div className='flex flex-row justify-between p-5 items-center' key={idx}>
                        <span className='text-5xl'> • </span>
                        <p>
                            Congrats!! You have been referred by <span className='font-bold'>{item.empName}</span> from <span className='font-bold'>{item.empCompany}</span> for JobId:<span className='font-bold'>{item.JobId}</span>. If needed, contact him/her through <span className='font-bold'>{item.empMail}</span>.
                        </p>
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleClear(idx)}>Clear</button>
                    </div>
                )
            })}
            {
                notifications.length==0 && 
                <div className='flex flex-col gap-5 items-center'>
                    <p className='text-3xl'>No Notifications yet.</p>
                    <Image src="/noNoti.webp" alt='noNoti' height={400} width={400} />
                </div>
            }
        </div>
    )
}

export default Noti