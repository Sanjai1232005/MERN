import { Apirespose } from "../util/api-response.js";

const healthcheck = async (req, res) => {
    try{
        res.status(200).json(new Apirespose(200, null, "Server is healthy"));

    }catch(err){
    }
}


export default healthcheck;