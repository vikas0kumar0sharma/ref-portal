"use client"
import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from 'next/navigation';
import { addRefReq } from '@/lib/actions/refReqs.actions';

const ApplyForRefSubmit = ({ userId}: { userId: string | undefined}) => {

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement; // Type assertion to HTMLFormElement
        const elements = form.querySelectorAll('input'); // Select all input elements within the form

        let formData: (number | string[]) = []
        elements.forEach((element: HTMLInputElement) => {
            formData.push(element.value); // Log the value of each input element
        });

        const [JobLink,JobId,CompanyName] = formData

        const data = {
            id: userId,
            JobLink:JobLink,
            JobId:JobId,
            CompanyName:CompanyName
        }

        addRefReq(data)
        router.push('/')
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                EasyReferral
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                All the best for your referral Request! Please take a moment to fill out the details required for referral.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>

                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="jobLink">Job Link</Label>
                        <Input id="jobLink" placeholder="" type="text" />
                    </LabelInputContainer>
                </div>

                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="jobId">Job Id</Label>
                        <Input id="jobId" placeholder="" type="text" />
                    </LabelInputContainer>
                </div>

                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" placeholder="" type="text" />
                    </LabelInputContainer>
                </div>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Continue &rarr;
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            </form>
        </div>
    )
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};


export default ApplyForRefSubmit
