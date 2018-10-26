const mongoose = require('mongoose');
const schema = mongoose.Schema;

const locationSchema = new schema({
  'type': { type: String, default: 'Feature' },
  'properties' : {
    'address' : String,
    'propertyOwner' : String,
    'typeOfWork' : String,
		'decade' : String,
		'helper' : String,
		'message' : String
  },
  'geometry' : {
    'type': { type: String, default: 'Point' },
    'coordinates' : {
      'type' : [Number],
      'index' : '2dsphere',
      'required' : true
    }
  }
});

const location = mongoose.model('location', locationSchema);

module.exports = location;