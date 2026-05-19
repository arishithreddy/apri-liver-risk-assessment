const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
    try {

        const {
            name,
            age,
            gender,
            ast,
            platelets
        } = req.body;

        const apri = ((ast / 40) / platelets) * 100;

        let interpretation = "";

        if (apri < 0.5) {
            interpretation = "Minimal Fibrosis";
        } else if (apri < 1.5) {
            interpretation = "Significant Fibrosis";
        } else {
            interpretation = "Cirrhosis";
        }

        const patient = await Patient.create({
            name,
            age,
            gender,
            ast,
            platelets,
            apri,
            interpretation
        });

        res.status(201).json(patient);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

exports.getPatients = async (req, res) => {
    try {

        const patients = await Patient.find().sort({
            createdAt: -1
        });

        res.json(patients);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
};
