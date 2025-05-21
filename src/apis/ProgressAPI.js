import axiosInstance from "./axiosInstance";

export const ProgressAPI = {
	get: async () => {
		const response = await axiosInstance.get('/app/progress');
		return response.data;
	},
}  