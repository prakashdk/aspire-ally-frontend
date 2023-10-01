import GoalCard from "./GoalCard"

export default function GoalPanel({ list }) {
    return (
        <div className="grid">
            {list.map((data, index) => {
                if (data !== null) {
                    const { image, title, description, progress } = data
                    return (
                        <div className="grid-item" key={title + index}>
                            <GoalCard image={image} header={title} body={description} progress={progress} colorIndex={index + 1} />
                        </div>
                    )
                }
            })}
        </div>
    )
}