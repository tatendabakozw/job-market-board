// src/services/userService.js
import axios from 'axios';
import { apiUrl } from '../utils/apiUrl';

export const createUser = async (
  name: string,
  description: string,
  status: string,
  assigned_reseachers?: string
) => {
  try {
    const response = await axios.post(`${apiUrl}`, {
      name,
      description,
      status,
      assigned_reseachers,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
