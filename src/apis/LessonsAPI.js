import axiosInstance from "./axiosInstance";

export const LessonsAPI = {
	get: async () => {
		const response = await axiosInstance.get('/app/lessons');
		return response.data;
	},

	put: async (id_lesson, status) => {
		const response = await axiosInstance.put('/app/lessonstatus', { id_lesson, status });
		return response.data;
	}
}  