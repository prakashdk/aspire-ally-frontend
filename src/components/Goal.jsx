import GoalInputGroup from "./Goal/GoalInputGroup";
import "../styles/goal.css";
import { Spacer } from "@nextui-org/react";
import GoalPanel from "./Goal/GoalPanel";
import Loader from "../shared/Loader";
import { useEffect, useState } from "react";
import {
  ALL_GOALS_URL,
  BASE_URL,
  SHORT_TERM_GOAL_URL,
} from "../constants/endpoints";
import Toast from "../shared/Toast";
import fetchData from "../service/fetchData";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../shared/hooks/useFetch";
import Footer from "../utils/Footer";
import { makeUrl } from "../service/makeUrl";

export default function Goal() {
  const [input, setInput] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [severity, setSeverity] = useState("success");
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.goalReducer);
  const { data, isLoading, error } = useFetch(
    `${BASE_URL}/user/${userId}/goal`
  );

  useEffect(() => {
    dispatch({
      type: "SET_ALL_GOALS",
      payload: data?.goals ?? [],
    });
  }, [data]);

  const addGoal = async () => {
    if (input === "") {
      setToastMessage("Goal is Empty");
      setOpenToast(true);
      setSeverity("Goal is Empty");
      return;
    }
    setIsFetchLoading(true);
    const urlString = `${BASE_URL}/goal/${userId}/short`;
    const url = makeUrl(urlString, { goal: input });
    url.searchParams.append("goal", input);
    setInput("");
    try {
      const response = await fetchData(url);
      dispatch({
        type: "APPEND_GOAL",
        payload: response,
      });
      setToastMessage("Goal Added successfully");
      setSeverity("success");
      setOpenToast(true);
    } catch (error) {
      setSeverity("error");
      console.log(error);
      setToastMessage("Invalid Response. Please try again");
      setOpenToast(true);
    } finally {
      setIsFetchLoading(false);
    }
  };

  return (
    <div className="goal">
      {isFetchLoading && <Loader label="Adding..." />}
      {isLoading && <Loader label="Fetching..." />}
      <GoalInputGroup
        disabled={isFetchLoading}
        input={input}
        setInput={setInput}
        clickEvent={addGoal}
      />
      <Spacer y={5} />
      <GoalPanel />
      <Toast
        message={toastMessage}
        severity={severity}
        open={openToast}
        setOpen={setOpenToast}
      />
      {error && (
        <Toast
          message={error.message}
          severity="error"
          open={true}
          setOpen={setOpenToast}
        />
      )}
      <Footer />
    </div>
  );
}
