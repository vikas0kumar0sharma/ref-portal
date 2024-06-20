import { currentUser } from "@clerk/nextjs";
import {redirect} from "next/navigation"
import { fetchEmployee } from "@/lib/actions/employee.actions";
import { fetchJobSeeker } from "@/lib/actions/jobSeeker.actions";
import { HomePage } from "@/components/ui/homePage";

export default async function Home() {
  const user=await currentUser();
  if(!user) return redirect('/sign-in')
  
  const employeeInfo=await fetchEmployee(user.id)
  const jobSeekerInfo=await fetchJobSeeker(user.id)

  if(!employeeInfo && !jobSeekerInfo) redirect('/onboarding')
  
  const isEmp:boolean=(employeeInfo!=null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <HomePage isEmp={isEmp}/>
      </div>
    </main>
  );
}
