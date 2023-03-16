import axios from "axios"
import { useEffect, useState } from "react"
import { TodoCard } from "../cards/TodoCard"

export const TodoSection = () => {
    
    const [todos, setTodos] = useState([])

    const fetchTodo = async () => {
        const resp = await axios.get('http://localhost:8000/api/v1/todos')
        setTodos(() => resp?.data?.data)
        console.log(resp?.data);
    }

    useEffect(() => {
        fetchTodo()
    }, [])

    return (
        <div className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl">Todo</h1>
            <div className="flex flex-col gap-2">
                {todos?.length > 0 ? todos?.map((item, idx) => (
                    <TodoCard key={idx} data={item} />
                ))
                :
                <div>
                    Todo tidak ada
                 </div>
                }
            </div>
        </div>
    )
}