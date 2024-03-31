const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const ProfileReport = require('../models/ProfileModel');
const router = express.Router();

// Add profile report
router.post('/add-profile-report', authMiddleware, async (req, res) => {
  try {
    const { name, email, phone, instaUrl, youtubeUrl } = req.body;
    const profileReport = new ProfileReport({ name, email, phone, instaUrl, youtubeUrl });
    await profileReport.save();
    res.send({
      message: 'Profile report added successfully',
      success: true
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false
    });
  }
});

// Update profile report
router.put('/update-profile-report/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, instaUrl, youtubeUrl } = req.body;
    const updatedProfileReport = await ProfileReport.findByIdAndUpdate(id, { name, email, phone, instaUrl, youtubeUrl }, { new: true });
    if (!updatedProfileReport) {
      return res.status(404).send({
        message: 'Profile report not found',
        success: false
      });
    }
    res.send({
      message: 'Profile report updated successfully',
      success: true
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false
    });
  }
});

// Delete profile report
router.delete('/delete-profile-report/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProfileReport = await ProfileReport.findByIdAndDelete(id);
    if (!deletedProfileReport) {
      return res.status(404).send({
        message: 'Profile report not found',
        success: false
      });
    }
    res.send({
      message: 'Profile report deleted successfully',
      success: true
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false
    });
  }
});

module.exports = router;
