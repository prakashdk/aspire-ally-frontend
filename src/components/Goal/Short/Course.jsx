import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Progress,
  Spacer,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PathHistory } from "./PathHistory";
import Jumbotron from "../../../utils/Jumbotron";
import SideBar from "../../../utils/SideBar";
import { useNavigate } from "react-router-dom";
import ShortTermGoalCard from "./ShorTermGoalCard";
import {
  ArrowBack,
  ArrowBackIosNewOutlined,
  ArrowForward,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Modal from "../../../utils/Modal";
import QuizGroup from "./QuizGroup";
import fetchData from "../../../service/fetchData";
import { QUIZZ_URL } from "../../../constants/endpoints";
import Toast from "../../../shared/Toast";

export const Course = () => {
  const [activeGoalIndex, setActiveGoalIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const { goals, activeGoalId } = useSelector((state) => state.goalReducer);
  const currentGoal = goals[activeGoalId] ?? {};
  const { title, description, progress, shortTermGoals } = currentGoal;
  const { topic } = shortTermGoals?.[activeGoalIndex] ?? {}; 
  const navigateTo = useNavigate();

  //For toast
  const [toastMessage, setToastMessage] = useState("")
  const [severity, setSeverity] = useState("success")
  const [openToast, setOpenToast] = useState(false)

  useEffect(() => {
    if (goals.length === 0 || activeGoalId === -1) {
      navigateTo("/goals");
    }
  }, []);

  const handleNext = async () => {
    setOpenDialog(true);
    setIsQuizLoading(true);
    try {
      const url = new URL(QUIZZ_URL);
      url.searchParams.append("topic", `${topic} for ${title}`);
      const response = await fetchData(url);
      setQuizzes(response.quiz);
    } catch (error) {
      setSeverity("error")
      setToastMessage("Error: "+error.message)
      setOpenToast(true)
      console.log(error);
      setOpenDialog(false)
    }
    setIsQuizLoading(false);
  };
  const handleFinish = () => {
    setOpenDialog(false);
    setQuizzes([])
    setActiveGoalIndex((i) => i + 1);
  };
  const handlePrevious = () => {
    setActiveGoalIndex((i) => i - 1);
  };
  return (
    <div>
      <PathHistory child={title} />
      <div className="grid-2">
        <div>
          <Progress
            color="primary"
            value={progress}
            className="max-w-full"
            label=" "
            aria-label=" "
            size="sm"
            maxValue={100}
            formatOptions={{ style: "percent" }}
            showValueLabel={true}
          />
          <Jumbotron title={title} description={description} />
          <Spacer y={10} />
          {shortTermGoals && activeGoalIndex >= shortTermGoals.length ? (
            <div>
              <div className="center">You've Done</div>
              <div className="center">
                <Button color="primary" onClick={() => setActiveGoalIndex(0)}>
                  Restart
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <ShortTermGoalCard title={title} data={shortTermGoals?.[activeGoalIndex]} />
              <div className="button-group">
                <div className="button-left">
                  <Button
                    disabled={activeGoalIndex <= 0}
                    onClick={handlePrevious}
                    color="primary"
                  >
                    <ArrowBack />
                    Previous
                  </Button>
                </div>
                <div className="button-right">
                  <Button onClick={handleNext} color="primary">
                    Next <ArrowForward />{" "}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <SideBar activeIndex={activeGoalIndex} menu={shortTermGoals} />
        </div>
      </div>
      <Toast message={toastMessage} severity={severity} open={openToast} setOpen={setOpenToast} />
      <Modal title={`${title} - ${topic}`} open={openDialog} setOpen={setOpenDialog}>
        <QuizGroup handleFinish={handleFinish} isLoading={isQuizLoading} quizzes={quizzes} />
      </Modal>
    </div>
  );
};
