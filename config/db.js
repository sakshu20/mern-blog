const mongoose = require("mongoose")
require("colors")
const db = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected".bgGreen)
    } catch (error) {
        console.log(`Unable to Connect ${error}`)
        process.exit() // stop server
    }
}

module.exports = db