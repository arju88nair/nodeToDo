var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({

    name: {
        type: String
    },
    description:{

    	type:String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_by: {
        type: Date,
        default: Date.now
    }
});
module.exports=mongoose.model('ToDo',TodoSchema);
