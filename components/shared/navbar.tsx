"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

type T = {
  SignOutButton: any,
  isEmp: boolean,
  isJobS: boolean,
  empFName: string,
  jobSFName: string
}

type T1 = {
  className?: string,
  SignOutButton: any,
  isEmp: boolean,
  isJobS: boolean,
  empFName: string,
  jobSFName: string
}

export default function NavB({ SignOutButton, isEmp, isJobS, empFName, jobSFName }: T) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" SignOutButton={SignOutButton} isEmp={isEmp} isJobS={isJobS} empFName={empFName} jobSFName={jobSFName} />
    </div>
  );
}

function Navbar({ className, SignOutButton, isEmp, isJobS, empFName, jobSFName }: T1) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter()

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-start w-full">
          <p className="flex items-center">
            <span className="text-gray-400">Easy</span>
            <span className="text-black">Referral</span>
          </p>
        </div>

        <div className="cursor-pointer" onClick={()=>router.push('/')}>
          Home
        </div>

        {isJobS && <div className="cursor-pointer" onClick={()=>router.push('/jobs')}>
          Jobs
        </div>}

        <MenuItem setActive={setActive} active={active} item={isJobS ? jobSFName : empFName}>
          <div className="flex flex-col space-y-4 text-sm">
            <SignOutButton />
            {/* <HoveredLink href="/hobby">Settings</HoveredLink> */}
          </div>
        </MenuItem>

      </Menu>
    </div>
  );
}
