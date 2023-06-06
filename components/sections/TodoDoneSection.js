import { useEffect, useState } from "react"
import { TodoCard } from "../cards/TodoCard"
import useSWR from 'swr'
import fetcher from "@/utils/fetcher"

export const TodoDoneSection = () => {

    const [todos, setTodos] = useState([])
    const {data: todoData, error, mutate} = useSWR('/todos', fetcher)

    useEffect(() => {
        if (todoData?.data) {
            setTodos(() => todoData?.data?.filter(item => item?.is_complete === true))
        }
    }, [todoData])

    return (
        <div className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl">Todo Done</h1>
            <div className="flex flex-col gap-2">
                {todos?.length > 0 ? todos?.map((item, idx) => (
                    <TodoCard isDone={true} key={idx} data={item} mutate={mutate} />
                ))
            :
            <div>
                Tidak ada data todo
            </div>
            }
            </div>
        </div>
    )
}