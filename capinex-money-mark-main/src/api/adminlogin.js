import {adminPortalAxios} from './axios'


export const adminloginApi = (data)=>{
    return adminPortalAxios.post(`/login`,data)
}