const mongoose =  require('mongoose');

const connectDB = async() => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URL, () => {
        console.log("Database connection successfully done!");
    }); 
}

module.exports = connectDB;