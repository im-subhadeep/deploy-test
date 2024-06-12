const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the age sub-schema
const ageSchema = new Schema({
    years: {
        type: Number,
        min: 0
    },
    months: {
        type: Number,
        min: 0,
        max: 11
    }
});

// Define the prescription schema
const PrescriptionSchema = new Schema({
    name: {
        type: String
    },
    age: ageSchema,
    sex: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    present_visit: {
        type: Date
    },
    last_visit: Date,
    visit_number: String,
    phone_number: {
        type: String
    },
    email_address: {
        type: String
    },
    medical_history: String,
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    bmi: Number,
    bp_systolic: Number,
    bp_diastolic: Number,
    heart_rate: Number,
    respiratory_rate: Number,
    oxygen_saturation: Number,
    blood_sugar: Number,
    chief_complain: String,
    other_findings: String,
    provisional_diagnosis: String,
    confirmation_tests: String,
    medications: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            dosage: String,
            amount: String,
            frequency: String,
            time_of_administration: String,
            duration: String,
            route: String,
            special_instructions: String,
            precautions: String
        }
    ],
    prescription_duration: String,
    refills: Number,
    signature: String
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
