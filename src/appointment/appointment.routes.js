import { Router } from "express";
import { saveAppointment, getAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/", getAppointment);

export default router;