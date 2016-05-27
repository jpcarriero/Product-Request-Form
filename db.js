var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var requestSchema = mongoose.Schema({
    name: String,
    requestType: String,
    details: String,
    dealLikelihood: Number,
    company: String,
    team: String,
    highPriority: Boolean,
    potentialDealSize: Number,
    comments: String
});

var Request = mongoose.model('request', requestSchema);

// var request = new Request({
//   name: 'Downstream Integration',
//   details: 'BigQuery'
// })

// request.save(function(err, request){
//   if(err) console.error(err);
//   console.log(request)
// })

module.exports = Request;