import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    CollegeName: {
        type: String,
        required: true
    },
    CGPA: {
        type: String,
        required: true
    },
    YOG: {
        type: String,
        required: true
    },
    PhoneNo: {
        type: String,
        required: true
    },
    YOE: {
        type: String,
        required: true
    },
    ResumeLink: {
        type: String,
        required: true
    },
    LinkedInProf: {
        type: String,
        required: true
    }
})

const JobSeeker = mongoose.models.JobSeeker || mongoose.model('JobSeeker', jobSeekerSchema)

export default JobSeeker