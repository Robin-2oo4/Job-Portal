import express from "express";
import { deleteJob, getAlljobs, getmyJobs, postJob, updateJob , getSinglejob} from "../controlers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall",isAuthorized ,getAlljobs);
router.post("/post",isAuthorized,postJob);
router.get("/:id",isAuthorized, getSinglejob);
router.get("/getmyjobs", isAuthorized ,getmyJobs);
router.put("/update/:id",isAuthorized,updateJob);
router.delete("/delete/:id",isAuthorized,deleteJob);
export default router;