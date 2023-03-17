import axios from "axios";

export const axiosIntstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    // Jika suatu saat butuh header
    // headers: {
    //     'Authorization': `Bearer ${token}`
    // }
})