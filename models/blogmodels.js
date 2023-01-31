const mongoose = require("mongoose")


const blogSchema =  mongoose.Schema({
    title: {
      type: String,
      required:[true, "Please Peovide title"]
    },
    desc: {
      type: String,
      required:[true, "Please Peovide desc"]
    },
    image: {
      type: String,
      required:[true, "Please Peovide Url"]
    },
    publish: {
      type: Boolean,
      default: false
    }
})

module.exports = mongoose.model("blog", blogSchema)
