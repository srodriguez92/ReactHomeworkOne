import {Request, Response, Router} from "express";
import config from "config";
import {ErrorHandler, handleError} from "../error";
import body_hospital_validations from "../middlewares/hospital/hospital.validator";
import validator_handler from "../middlewares/validator";
import Hospital from "../models/hospital";

const router = Router();

router.post(
	"/",
	body_hospital_validations,
	validator_handler,
	async (req: Request, resp: Response) => {
		const {
			name,
			patientsCount,
			activePatientsCount,
			maxPatients,
			staffCount,
			createDate,
			updateDate,
		} = req.body;
		try {
			let hospital = await Hospital.findOne({name});
			if (hospital) {
				const custom = new ErrorHandler(400, "Hospital already exists");
				handleError(custom, req, resp);
			}
			hospital = new Hospital({
				name,
				patientsCount,
				activePatientsCount,
				maxPatients,
				staffCount,
				createDate,
				updateDate,
			});
			await hospital.save();

			resp.status(200).json({
				msj: "Hospital Created",
			});
		} catch (err) {
			const custom = new ErrorHandler(500, "Server Error");
			handleError(custom, req, resp);
		}
	}
);

export default router;
