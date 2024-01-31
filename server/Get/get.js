const PhoneBook = require("../db/db")

const getAllPhones = async(req,res) =>{
    const phoneNumber = await PhoneBook.find({})
    try{
        res.status(200).json({status: 'Success', data : {phoneNumber}})

    }
    catch(err) {
        res.status(500).json({
            status: 'Failed',
            message : err
    })
  }
}
module.exports = getAllPhones