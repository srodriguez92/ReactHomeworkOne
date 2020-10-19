import { Schema, Model, Document, model } from 'mongoose';

const HospitalSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	patientsCount: {
		type: Number,	
	},
	activePatientsCount: {
		type: Number,
	},
	maxPatients: {
		type: Number,
		required: true,
	},
	staffCount: {
		type: Number,
		required: true,
	},
	createDate: {
		type: Date,
		required: true,
	},
	updateDate: {
		type: Date,
	},
});

interface IHospitalSchema extends Document {
	name: string;
	patientsCount: number;
	activePatientsCount: number;
	maxPatients: number;
	staffCount: number;
	createDate: Date;
	updateDate: Date;
}

export default model<IHospitalSchema>("Hospital", HospitalSchema)