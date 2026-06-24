import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/GetUserFromStorage";

const token = getUserFromStorage();

export const AddTransactionAPI = async({type,category,date,description,amount}) => {
    const response = await axios.post(`${BASE_URL}/transactions/create`,{
        type,
        amount,
        category,
        date,
        description,
    },{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data
};

//!lists
export const ListTransactionAPI = async({type, category, startDate, endDate}) => {
    const response = await axios.get(`${BASE_URL}/transactions/lists`,
        {
        params:{
            category,
            type,
            startDate,
            endDate,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

//!update
export const updateTransactionAPI = async(id) => {
    const response = await axios.put(`${BASE_URL}/transactions/update/:id`,{
        type,
        category,
        amount,
        date,
        description,
    },{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}
//!delete
export const deleteTransactionAPI = async({}) => {
    const response = await axios.delete(`${BASE_URL}/transactions/delete/:id`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}