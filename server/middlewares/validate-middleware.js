const validate = (schema) => async (req, res, next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();

    } catch (err) {
        if(err){
            console.log(err.issues[0].message);
            const status = 400;
            const message = "Input must be filled";
            const extraDetails = err.issues[0].message;
            const error = {
                status,
                message,
                extraDetails
            }
            // res.status(400).json({msg: mssg})
            next(error);
        }
    }
}

module.exports = validate;