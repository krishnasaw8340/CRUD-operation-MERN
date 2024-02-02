const PhoneBook = require("../db/db")
const deleteOne = async(req,res) =>{
    await PhoneBook.findByIdAndDelete(req.param.id)
    try{
        res.status(204).json({
            status : 'Success',
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