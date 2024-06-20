"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { useRouter } from "next/navigation";

export function HomePage({ isEmp }: { isEmp: boolean }) {
    const router = useRouter()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            {!isEmp && <WobbleCard
                containerClassName="col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className="">
                <div className="flex flex-col justify-between h-full p-4">
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Apply for a Referral
                        </h2>
                        <p className="mt-4 text-left text-base/6 text-neutral-200">
                            Take the next step in your career by connecting directly with employees from top companies. Our referral portal allows you to easily request referrals, providing you with a competitive edge in the job market.
                        </p>
                    </div>
                    <button className="mt-4 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md" onClick={() => router.push('/applyForRef')}>
                        Apply
                    </button>
                </div>
            </WobbleCard>}
            {!isEmp && <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-600">
                <div className="flex flex-col justify-between h-full p-4">
                    <div className="max-w-xs">
                        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Check Referral Request Status
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            Stay updated on the progress of your referral requests. Our portal allows you to easily track the status of your requests, whether they are pending, accepted, or processed. Never miss an update and keep your job application process on track with real-time notifications and status updates.
                        </p>
                    </div>
                    <button className="mt-4 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md" onClick={() => router.push('/refReqStatus')}>
                        Check
                    </button>
                </div>
            </WobbleCard>}

            {!isEmp && <WobbleCard containerClassName="col-span-1 bg-green-600 min-h-[300px]">
                <div className="flex flex-col justify-between h-full p-4">
                    <div className="max-w-xs">
                        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Notifications
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            Stay informed with real-time notifications from employees. Receive updates on your referral requests, important messages, and other relevant communications directly in your portal. Ensure you never miss a critical update and stay connected throughout your job application process.
                        </p>
                    </div>
                    <button className="mt-4 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md" onClick={() => router.push('/notifications')}>
                        View
                    </button>
                </div>
            </WobbleCard>}

            {isEmp && <WobbleCard
                containerClassName="col-span-1 lg:col-span-3 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className="">
                <div className="flex flex-col justify-between h-full p-4">
                    <div className="max-w-xl">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Review Referral Requests
                        </h2>
                        <p className="mt-4 text-left text-base/6 text-neutral-200">
                            Manage and review referral requests from potential candidates seeking opportunities within our company. Assess their profiles, provide feedback, and help talented individuals advance in their careers by endorsing them for relevant positions. Your referrals can make a significant impact on our hiring process and contribute to building a strong, diverse team.
                        </p>
                    </div>
                    <button className="mt-4 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md" onClick={() => router.push('/refReqs')}>
                        Review
                    </button>
                </div>
            </WobbleCard>}
        </div>
    );
}
