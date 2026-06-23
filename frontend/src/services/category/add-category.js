import axios from "axios"
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/GetUserFromStorage";

const token = getUserFromStorage();

export const AddCategoryAPI = async({type,name}) => {
    const response = await axios.post(`${BASE_URL}/categories/create`,{
        type,
        name,
    },{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};
export const ListCategoryAPI = async({type,name}) => {
    const response = await axios.get(`${BASE_URL}/categories/lists`,{
        type,
        name,
    });
    return response.data;
};