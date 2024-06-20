type Item={
    jobId:number,
    jobPosition:string,
    type:string,
    jobType:string,
    companyName:string,
    jobLocation:string,
    batch:boolean,
    batchYear:string,
    experienceYear:string,
    postedOn:string,
    positionCategory:string
}

const LIMIT=9

export default async function fetchItems({pageParam}:{pageParam:number}):Promise<{
    data:Item[];
    currentPage:number;
    nextPage:number|null;
}>{
    const Data=await fetch('/api/jiw-be-job/getAllOpportunities')
    const jobs=await Data.json()
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                data:jobs.slice(pageParam,pageParam+LIMIT),
                currentPage:pageParam,
                nextPage:pageParam+LIMIT < jobs.length ? pageParam+LIMIT:null
            })
        },1000)
    })
}