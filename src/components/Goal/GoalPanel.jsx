import { useSelector } from "react-redux";
import GoalCard from "./GoalCard";
import { AddBox } from "@mui/icons-material";

export default function GoalPanel() {
  const { goals } = useSelector((state) => state.goalReducer);
  if (goals?.length === 0) {
    return (
      <div style={{ opacity: "0.3", color: "#2196f3" }}>
        <div className="center" style={{ fontSize: "150px" }}>
          <AddBox fontSize="" />
        </div>
        <div className="center">Add you first goal</div>
      </div>
    );
  }
  return (
    <div className="grid">
      {goals.map((data, index) => {
        if (data !== null) {
          const { title } = data;
          return (
            <div className="grid-item" key={title + index}>
              <GoalCard data={data} index={index + 1} />
            </div>
          );
        }
      })}
    </div>
  );
}
