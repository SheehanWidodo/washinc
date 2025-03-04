// src/services/api.js
import axios from 'axios';
import Papa from 'papaparse';

const GOOGLE_SHEET_CSV_URL = import.meta.env.VITE_GOOGLE_SHEET_CSV_URL;

export const fetchShoeData = async () => {
  try {
    const response = await axios.get(GOOGLE_SHEET_CSV_URL);
    const parsedData = Papa.parse(response.data, { header: true });
    return parsedData.data;
  } catch (error) {
    console.error('Error fetching shoe data:', error);
    throw error;
  }
};
