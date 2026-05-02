import express from 'express';
import { getuser, insertuser, insertusermaeks, updatemarksarray, updateuser, updateuserage } from '../controller/usercontroller.js';


const router=express.Router();


router.post("/",insertuser);
router.post("/update",updateuser)
router.post("/upage",updateuserage)
router.post("/marks",insertusermaeks)
router.post("/uparray",updatemarksarray)
router.get("/get",getuser)

export default router;