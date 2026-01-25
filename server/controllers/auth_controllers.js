const home = async (req, res)=>{
try {
    res.status(200).send("This is home page by router.");
} catch (error) {
    console.log(error);
    }
};


const register = async (req, res)=>{
    try {
        console.log(req.body)
        res.status(200).send(req.body);      
    } catch (error) {
        res.status(400).send({mssg:"page not found"});
        console.error(error);
    }
}

module.exports = {home, register};