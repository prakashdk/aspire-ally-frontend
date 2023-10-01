import GoalInputGroup from "./Goal/GoalInputGroup";
import '../styles/goal.css'
import { Spacer } from "@nextui-org/react";
import GoalPanel from "./Goal/GoalPanel";
import Loader from "../shared/Loader";
import { useState } from "react";
import { SHORT_TERM_GOAL_URL } from "../constants/endpoints";
import Toast from "../shared/Toast";
import fetchData from "../service/fetchData";

export default function Goal() {
    const [input, setInput] = useState("")
    const [openToast, setOpenToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [goal, setGoal] = useState(null)
    const [isFetchLoading, setIsFetchLoading] = useState(false)
    const [severity, setSeverity] = useState("success")

    const addGoal = async () => {
        if (input === "") {
            setToastMessage("Goal is Empty")
            setOpenToast(true)
            setSeverity("Goal is Empty")
            return;
        }
        setIsFetchLoading(true)
        const url = new URL(SHORT_TERM_GOAL_URL)
        url.searchParams.append("goal", input)
        setInput("")
        try {
            const response = await fetchData(url)
            setGoal(response)
            setToastMessage("Goal Added successfully")
            setSeverity("success")
            setOpenToast(true)
        } catch (error) {
            setSeverity("error")
            console.log(error);
            setToastMessage("Invalid Response. Please try again")
            setOpenToast(true)
        }
        finally {
            setIsFetchLoading(false)
        }
    }

    return (
        <div className="goal">
            {isFetchLoading && <Loader label="Adding..." />}
            <GoalInputGroup disabled={isFetchLoading} input={input} setInput={setInput} clickEvent={addGoal} />
            <Spacer y={5} />
            <GoalPanel list={[goal]} />
            <Toast message={toastMessage} severity={severity} open={openToast} setOpen={setOpenToast} />
        </div>
    )
}