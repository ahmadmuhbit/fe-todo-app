import { TodoCard } from "../cards/TodoCard"

export const TodoDoneSection = () => {
    return (
        <div className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl">Todo Done</h1>
            <div className="flex flex-col gap-2">
                <TodoCard isDone={true} />
                <TodoCard isDone={true} />
                <TodoCard isDone={true} />
                <TodoCard isDone={true} />
                <TodoCard isDone={true} />
                <TodoCard isDone={true} />
                <TodoCard isDone={true} />
            </div>
        </div>
    )
}