import axiosInstance from "./axiosInstance";

export const AuthAPI = {
    // post:  axiosInstance.post('/login', post),
    loginPost: async (post) => {
        const response = await axiosInstance.post('/login', post);
        return response.data;
    },

    logoutPost: async (post) => {
        const response = await axiosInstance.post('/logout', post);
        return response.data;
    },
    
    verifyAuthPost: async (post) => {
        const response = await axiosInstance.post('/verifyAuth', post);
        return response.data;
    },
}  