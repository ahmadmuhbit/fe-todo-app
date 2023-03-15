import { TodoSection } from "../sections/TodoSection"
import { TodoDoneSection } from "../sections/TodoDoneSection"

export const HomePage = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <TodoSection />
            </div>
            <div>
                <TodoDoneSection />
            </div>
        </div>
    )
}