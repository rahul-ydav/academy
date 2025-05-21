import axiosInstance from "./axiosInstance";

export const AuthAPI = {
	// post:  axiosInstance.post('/login', post),
	loginPost: async (post) => {
		const response = await axiosInstance.post('/app/login', post);
		return response.data;
	},

	logoutPost: async (post) => {
		const response = await axiosInstance.post('/app/logout', post);
		return response.data;
	},

	verifyAuthPost: async (post) => {
		const response = await axiosInstance.post('/app/verifyAuth', post);
		return response.data;
	},

	user: async () => {
		const response = await axiosInstance.get('/app/user');
		return response.data;
	},

}  