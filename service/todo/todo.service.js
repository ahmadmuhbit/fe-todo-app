import { axiosIntstance } from "../http/axios.service"

export const updateTodo = async (data, id) => {
    const resp = await axiosIntstance.patch(`/todos/${id}`, data)
    return resp?.data
}