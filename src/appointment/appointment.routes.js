import { Router } from "express";
import { saveAppointment, getAppointment,getAppointmentsByUser,cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment)
router.get("/", getAppointment)
router.get("/getAppointmentsByUserId/:uid", getAppointmentsByUser)
router.delete("/cancelAppointment/:aid", cancelAppointment)

export default router;