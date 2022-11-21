import attendanceServices from "../services/attendance/attendanceServices";
import apiUtils from "../utils/apiUtils";
import jwtUtils from '../utils/jwtUtils';

const attendance = async (req, res) => {
    try {
        let showId = req.body.showId;
        let decoded = jwtUtils.verifyToken(req.cookies.jwt);

        // Check quyền (urls) 
        // let urls = decoded.urls;

        let data = await attendanceServices.attendance(decoded.id, showId);
        if (data.EC === 0 || data.EC === 1) {
            return res.status(200).json({
                EC: data.EC,
                EM: data.EM,
                DT: data.DT
            })
        }

        return res.status(500).json({
            EC: data.EC,
            EM: data.EM,
            DT: data.DT
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json(apiUtils.resFormat());
    }
}


export default {
    attendance
}