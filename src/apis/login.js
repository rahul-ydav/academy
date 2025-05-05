import axiosInstance from "./axiosInstance";

export const loginAPI = {
    // post:  axiosInstance.post('/login', post),
    post: async (post) => {
        const response = await axiosInstance.post('/login', post);
        return response.data;
      },
}  