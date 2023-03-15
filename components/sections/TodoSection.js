import { TodoCard } from "../cards/TodoCard"

export const TodoSection = () => {
    return (
        <div className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl">Todo</h1>
            <div className="flex flex-col gap-2">
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    )
}