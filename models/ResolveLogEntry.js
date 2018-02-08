var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resolveLogEntrySchema = new Schema({
    input: String,
    output: String,
    date: Date,
    version: String
});
mongoose.model('ResolveLogEntry', resolveLogEntrySchema);