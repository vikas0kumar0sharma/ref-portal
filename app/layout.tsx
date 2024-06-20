import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavB from "@/components/shared/navbar";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { fetchEmployee } from "@/lib/actions/employee.actions";
import { fetchJobSeeker } from "@/lib/actions/jobSeeker.actions";
import QueryProvider from "@/components/providers/QueryProvider"; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: any = await currentUser();

  const employeeInfo = await fetchEmployee(user?.id);
  const jobSeekerInfo = await fetchJobSeeker(user?.id);

  const isEmp: boolean = employeeInfo !== null;
  const isJobS: boolean = jobSeekerInfo !== null;

  const empFName: string = employeeInfo?.FirstName;
  const jobSFName: string = jobSeekerInfo?.FirstName;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {user && (
            <NavB
              SignOutButton={SignOutButton}
              isEmp={isEmp}
              isJobS={isJobS}
              empFName={empFName}
              jobSFName={jobSFName}
            />
          )}
          <div style={{ position: "relative", top: "100px" }}>
            <QueryProvider>{children}</QueryProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}