// PrescriptionRoutes.js
const express = require('express');
const router = express.Router();
const Prescription = require('../models/Prescription');

router.get('/', async (req, res) => {
    try {
        const prescriptions = await Prescription.find();
        res.status(200).json(prescriptions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id);
        if (!prescription) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.status(200).json(prescription);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const newPrescription = new Prescription(req.body);
    try {
        const savedPrescription = await newPrescription.save();
        res.status(201).json(savedPrescription);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPrescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedPrescription) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.status(200).json(updatedPrescription);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedPrescription = await Prescription.findByIdAndDelete(req.params.id);
        if (!deletedPrescription) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.status(200).json({ message: 'Prescription deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
