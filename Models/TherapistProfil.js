const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'therapist'
  },
  bio: {
    type: String,
  },
  office: {
    type: String
  },
  sexe: {
    type: String
  },
  age: {
    type: String
  },
  specialization: {
    type: [String],
    required: true,
  },
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ]
});
module.exports = TherapistProfil = mongoose.model("therapistprofil", TherapistProfilSchema);
