import api from './api';

export const appointmentService = {
  getAll: async (params) => {
    const response = await api.get('/appointments', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
  },

  create: async (appointmentData) => {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },

  update: async (id, appointmentData) => {
    const response = await api.put(`/appointments/${id}`, appointmentData);
    return response.data;
  },

  cancel: async (id) => {
    const response = await api.patch(`/appointments/${id}/cancel`);
    return response.data;
  },

  getAvailableSlots: async (doctorId, date) => {
    const response = await api.get(`/appointments/available-slots`, {
      params: { doctorId, date },
    });
    return response.data;
  },
};
