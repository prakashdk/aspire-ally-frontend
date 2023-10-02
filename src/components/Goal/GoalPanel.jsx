import { useSelector } from "react-redux"
import GoalCard from "./GoalCard"

export default function GoalPanel() {
    const { goals } = useSelector(state => state.goalReducer)
    if (goals?.length === 0) {
        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                Add Some Goals
            </div>
        )
    }
    return (
        <div className="grid">
            {goals.map((data, index) => {
                if (data !== null) {
                    const { title } = data
                    return (
                        <div className="grid-item" key={title + index}>
                            <GoalCard data={data} index={index + 1} />
                        </div>
                    )
                }
            })}
        </div>
    )
}