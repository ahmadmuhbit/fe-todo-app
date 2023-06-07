import { axiosIntstance } from "../http/axios.service"

export const updateTodo = async (data, id) => {
    const resp = await axiosIntstance.patch(`/todos/${id}`, data)
    return resp?.data
}

export const addTodo = async (data) => {
    const resp = await axiosIntstance.post(`/todos`, data)
    return resp?.data
}