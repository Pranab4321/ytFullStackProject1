const Contact = require("../models/contact-models");

const contactForm = async (req, res)=>{
    try{
        const response = req.body;
        await Contact.create(response);
        res.status(200).json({msg: "message send successfully"});

    }catch(error){
        res.status(500).json({msg: "message not delivered"});
    }
}

module.exports = contactForm;