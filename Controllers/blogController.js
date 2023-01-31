const blog = require("./../models/blogmodels")

exports.getAllBlog = async (req, res) => {
    try {
        const result = await blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
exports.addAllBlog = async (req, res) => {
    try {
        console.log(req.body);
         await blog.create(req.body)
        res.json({
            success: true,
            message: "Blog blog Created Successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}

exports.removeAllBlog = async (req, res) => {
    try {
        const {blogId} = req.params
        await blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: " Blog remove ",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}

 exports.editAllBlog = async (req, res) => {
     try {
        const {blogId} = req.params
          await blog.findByIdAndUpdate(blogId, req.body)
         res.json({
             success: true,
             message: "All Blog edit",
            //  result
         })
     } catch (error) {
         res.json({
             success: false,
             message: `Error ${error}`
         })
    }
}