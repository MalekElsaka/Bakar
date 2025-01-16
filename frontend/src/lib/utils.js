import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import axios from 'axios';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const axiosInstance = axios.create({
  baseURL: 'https://www.bakarcompany.somee.com', 
  headers: { 'Content-Type': 'application/json' },
});

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const mapStatus = (status) => {
  const statusMap = {
      1: 'Succeeded',
      2: 'Pending',
      3: 'Canceled',
      4: 'Failed',
      5: 'Refunded',
      6: 'Disputed'
  };
  return statusMap[status] || 'unknown';
};