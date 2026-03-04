const middle = (req,res,next)=>{
    console.log(req.url);
    next();
}

export default middle;