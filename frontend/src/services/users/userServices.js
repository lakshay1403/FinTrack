import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/GetUserFromStorage";
const token = getUserFromStorage();

//!Login
export const loginAPI = async({email,password}) => {
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email,
        password,
    });
    //Return a promise
    return response.data;
};

//!register
export const RegisterAPI = async({email,password,username}) => {
    const response = await axios.post(`${BASE_URL}/users/register`,{
        email,
        password,
        username,
    });
    //Return a promise
    return response.data;
};

//!update password
export const UpdatePasswordAPI = async(password) => {
    const response = await axios.put(`${BASE_URL}/users/change-password`,
    {
        password,
    },{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

//!update profile
export const UpdateProfileAPI = async({email,username}) => {
    const response = await axios.put(`${BASE_URL}/users/update-profile`,{
        email,
        username,
    },{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;   
}