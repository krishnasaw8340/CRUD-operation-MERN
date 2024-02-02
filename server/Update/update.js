const PhoneBook = require("../db/db");

const update =  async(req,res) => {
    const updatePhone = await PhoneBook.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators :true
    })
    try{
        res.status(200).json({
            status : 'Success',
            data: {
                updatePhone
            }
        })
    }
    catch(err){
        console.log(err);
    }

}
module.exports = update;