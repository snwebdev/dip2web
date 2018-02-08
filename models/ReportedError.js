var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportedErrorSchema = new Schema({
    input: String,
    output: String,
    date: Date,
    name: String,
    email: String,
    errorDescription: String,
    version: String
});
mongoose.model('ReportedError', reportedErrorSchema);
