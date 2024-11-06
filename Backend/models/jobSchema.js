import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,"Please provide job title"],
        minLength:[3,"Job title must contain at least 3 characters!"],
        maxLength:[50,"Job title can not exceed 50 characters!"]
    },
    description:{
        type: String,
        required: [true,"Please provide job description"],
        minLength: [3,"Job description must contain at least 3 characters!"],
        maxLength:[350,"Job description can not exceed 350 characters!"],
    },
    category:{
        type: String,
        required: [true,"Job category required!"],
    },
    country:{
        type: String,
        required: [true,"Job Country is required!"],
    },
    city:{
        type: String,
        required: [true,"Job city is required!"],
    },
    location:{
        type: String,
        required: [true,"Job location is required!"],
    },
    fixedSalary:{
        type: Number,
        minLength: [4,"Fixed salary must contain at least 4 digit"],
        maxLength: [9,"Fixed salary cannot exceed 9 digit"],
    },
    salaryFrom:{
        type: Number,
        minLength: [4,"Fixed salary must contain at least 4 digit"],
        maxLength: [9,"Fixed salary cannot exceed 9 digit"],
    },
    salaryTo:{
        type:Number,
        minLength: [4,"Fixed salary must contain at least 4 digit"],
        maxLength: [9,"Fixed salary cannot exceed 9 digit"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    
});

export const Job = mongoose.model("Job",jobSchema);