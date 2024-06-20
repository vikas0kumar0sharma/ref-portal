"use client"
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchItems from "@/lib/apis/fetchJobs";
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import JobCard from "@/components/ui/jobCard";

export default function page() {
  const { data, status, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return status === 'pending' ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="lg" />
    </div>
  ) : status === 'error' ? (
    <div>{error.message}</div>
  ) : (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {data.pages.map((page) => {
          return (
            // <div key={page.currentPage}>
            page.data.map((item) => {
              return (
                <JobCard
                  key={item.jobId}
                  companyName={item.companyName}
                  type={item.type}
                  jobPosition={item.jobPosition}
                  jobLocation={item.jobLocation}
                  jobType={item.jobType}
                  batch={item.batch}
                  batchYear={item.batchYear}
                  experienceYear={item.experienceYear}
                  postedOn={item.postedOn}
                />
              );
            })
            // </div>
          );
        })}
      </div>
      <div ref={ref} className="flex justify-center items-center">
        {isFetchingNextPage && <Spinner size="lg" />}
      </div>
    </>
  )
}