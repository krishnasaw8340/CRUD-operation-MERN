const PhoneBook = require("../db/db")
const addphone = async(req, res) =>
{
    try{
        const {name, phone} = req.body;
        if(!name || !phone)
        {
            return res.status(400).json(
                {message: "Name and phone no are required:"}
            )
        }
        const newPhoneEntry = new PhoneBook({
            name,
            phone
        })
        await newPhoneEntry.save();
        res.status(201).json({message: "Phone added successfully"})
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({message: "Internal Server Error: "})

    }
}
module.exports = addphone;
