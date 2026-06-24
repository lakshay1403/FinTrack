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
export const ListCategoryAPI = async() => {
    const response = await axios.get(`${BASE_URL}/categories/lists`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

//!update
export const UpdateCategoryAPI = async({name,type,id}) => {
    const response = await axios.put(`${BASE_URL}/categories/update/${id}`,{
        name,
        type,
    },
    {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

//!delete
export const DeleteCategoryAPI = async (id) => {
    const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
};