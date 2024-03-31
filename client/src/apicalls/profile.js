const { default: axiosInstance } = require(".");


export const addProfileReport = async (payload) => {
    try {
      const response = await axiosInstance.post('/api/profiles/add-profile-report', payload);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };


  export const updateProfileReport = async (id, payload) => {
    try {
      const response = await axiosInstance.put(`/api/profiles/update-profile-report/${id}`, payload);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };


  export const deleteProfileReport = async (id) => {
    try {
      const response = await axiosInstance.delete(`/api/profiles/delete-profile-report/${id}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
  
  