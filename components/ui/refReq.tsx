"use client"
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { acceptRefReq } from '@/lib/actions/refReqs.actions';
import Image from 'next/image';

const RefReq = ({ data, jobSdata }: { data: any, jobSdata: any }) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleAction = (idx: any) => {
        acceptRefReq(data[idx])
        window.location.reload(); // Refresh the page
    }

    return (
        <div className='flex flex-col'>
            {data.length > 0 && <div className='flex flex-row justify-between p-10'>
                <h2 className='font-bold mr-10'>Name</h2>
                <h2 className='font-bold mr-10'>JobId</h2>
                <h2 className='font-bold mr-10'>Profile</h2>
            </div>}

            {data.length > 0 &&
                data.map((item: any, idx: any) => {
                    return (
                        <div key={idx} className='flex flex-row justify-between p-10'>
                            <h2 className='mr-10'>{item.name}</h2>
                            <h2 className='mr-10'>{item.JobId}</h2>
                            <Button onPress={onOpen}>View Profile</Button>

                            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">JobSeeker's Profile</ModalHeader>
                                            <ModalBody>
                                                <p>
                                                    <span className='font-bold'>First Name: </span>{jobSdata[idx].FirstName}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>Last Name: </span>{jobSdata[idx].LastName}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>College Name: </span>{jobSdata[idx].CollegeName}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>CGPA: </span>{jobSdata[idx].CGPA}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>Year of graduation: </span>{jobSdata[idx].YOG}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>Resume Link: </span>{jobSdata[idx].ResumeLink}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>Linkedin: </span>{jobSdata[idx].LinkedInProf}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>Years of experience: </span>{jobSdata[idx].YOE}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>email: </span>{jobSdata[idx].email}
                                                </p>
                                                <p>
                                                    <span className='font-bold'>Mobile no.: </span>{jobSdata[idx].PhoneNo}
                                                </p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" onPress={() => handleAction(idx)}>
                                                    Refer
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>

                        </div>
                    )
                })
            }

            {data.length == 0 &&
                <div className='flex flex-col items-center gap-10'>
                    <p className='text-3xl'>No Requests found.</p>
                    <Image src="/noResults.png" alt='no results' height={300} width={300} />
                </div>
            }
        </div>
    )
}

export default RefReq