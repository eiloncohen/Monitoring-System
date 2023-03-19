import { add } from "./redux/monitorReducer";
import axios from "axios"

const BASE_URL = "http://localhost:5000"

export const get_data = async(dispatch) => {
    try {
        const res = await axios.get(BASE_URL + "/dummy")
        console.log(res.data);
        res.data.forEach(elm => {
            dispatch(add(elm))
        });
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }
}

export const get_summary = async() => {
    try {
        const res = await axios.get(BASE_URL + "/summary")
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }
}