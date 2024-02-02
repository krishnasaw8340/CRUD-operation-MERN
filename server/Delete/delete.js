const PhoneBook = require("../db/db")
const deleteOne = async(req,res) =>{
    await PhoneBook.findByIdAndDelete(req.params.id)
    try{
        res.status(204).json({
            status : 'Success',
            message: "Deleted",
            data : {}
        })
    }
    catch(err) {
        res.status(500).json({
            status: 'Failed',
            message : err
        })

    }

}
module.exports = deleteOne