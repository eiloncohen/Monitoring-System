import { addDetect } from "./redux/monitorReducer";
import axios from "axios"

const BASE_URL = "http://localhost:5000"

export const get_data = async(dispatch) => {
    try {
        const res = await axios.get(BASE_URL + "/dummy")
        console.log(res.data);
        res.data.forEach(elm => {
            dispatch(addDetect(elm))
        });
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }
}