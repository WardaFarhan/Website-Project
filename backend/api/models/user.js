const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;
const { Book } = require('./book.model');
// import schema from Book.js
//const bookSchema = require('./Book');

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : [true, "Email required"],
        unique : true,
        trim : true,
        validate : {
            validator : function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message : 'Please enter a valid email'
        }
    },
    password  : {
        type : String,
        required : true
    },
    resetToken : String,
    expireToken : Date,
    
    pic : {
        type : String,
        default : "https://res.cloudinary.com/kammy/image/upload/v1607202037/default-user-image-2_pputze.png"
    },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: Book }],
  }, 
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  },
  {
    timestamps: true,
  }
 
);

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  // when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
  //userSchema.virtual('bookCount').get(function () {
    //return this.savedBooks.length;
  //});

const User =  mongoose.model('User', userSchema);
module.exports = User;
