import axios from "axios";

export const fetchDetailData = async () => {
    const response = await axios.get('http://5.189.180.8:8010/detail');
    return response.data;
};