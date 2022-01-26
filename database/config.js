const mongoose = require('mongoose')


const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });
        console.log('data bese conectada')

    } catch(error) {
     console.log(error);
     throw new Error('Error a la hora de conectar a la db')
    }
}


module.exports = {dbConnection}