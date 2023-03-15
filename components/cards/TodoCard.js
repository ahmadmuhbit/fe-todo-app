export const TodoCard = ({isDone = false}) => {

    const handleEditTodo = () => {
        alert('melakukan edit todo')
    }

    const handleDoneTodo = () => {
        alert('memindahkan todo ke done section')
    }

    const handleReturnTodo = () => {
        alert('memindahkan todo kembali ke list todo')
    }

    return (
        <div className="p-5 rounded-lg border bg-white flex flex-col gap-2">
            <div className="flex flex-col gap-0">
                <div className="text-lg font-semibold">
                    Judul Todo
                </div>
                <div className="text-xs">
                    2 hari yang lalu
                </div>
            </div>
            <p className="rounded-lg bg-slate-100 p-3 text-sm italic">
                Note
            </p>
            <div className="flex items-start justify-end gap-2 text-xs">
                <button className="rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-3 py-1" onClick={() => handleEditTodo()}>
                    Edit
                </button>
                {isDone ? 
                <button className="rounded-lg bg-rose-600 hover:bg-rose-700 text-white px-3 py-1" onClick={() => handleReturnTodo()}>
                    Return to Todo
                </button>
                :
                <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-3 py-1" onClick={() => handleDoneTodo()}>
                    Done
                </button>
                }
            </div>
        </div>
    )
}