import axios from "axios";
//https://13.233.14.134:8002/api/v1

export const blogAxios = axios.create({
    baseURL:'https://capinex-portfolio-backend.onrender.com/api/v1',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const adminPortalAxios = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
