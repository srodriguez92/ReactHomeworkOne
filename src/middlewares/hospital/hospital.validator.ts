import {body} from "express-validator";

const validations = [
	body("name").exists().withMessage("Name is required"),
	body("name")
		.if(body("name").exists())
		.isLength({min: 8})
		.withMessage("Min length of name is 8 characters"),
	body("maxPatients").exists().withMessage("Max Patients Count is required"),
	body("staffCount").exists().withMessage("Staff Count is required"),
	body("createDate").exists().withMessage("Creation Date is required"),
];
export default validations;
