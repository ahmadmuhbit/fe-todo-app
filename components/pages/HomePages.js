import { TodoSection } from "../sections/TodoSection"
import { TodoDoneSection } from "../sections/TodoDoneSection"
import { AddTodoModal } from "../modals/AddTodoModal"
import { useState } from "react"

export const HomePage = () => {
    const[openAddModal, setOpenAddModal] = useState(false)

    const handleOpenModalNewTodo = () => {
        setOpenAddModal(true)
    }

    return (
        <div className="flex flex-col gap-2">
            <div>
                <button className="rounded-lg bg-emerald-400 px-3 py-2 text-lg font-semibold" onClick={handleOpenModalNewTodo}>
                    + add todo
                </button>
                {openAddModal ?
                    <AddTodoModal handleClose={() => setOpenAddModal(false)} />
                    : null
                }
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <TodoSection />
                </div>
                <div>
                    <TodoDoneSection />
                </div>
            </div>
        </div>
    )
}