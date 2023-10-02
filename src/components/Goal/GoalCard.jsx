import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Progress, Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";

export default function GoalCard({ data, index }) {
    const { image, title, description, progress } = data
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"]
    let navigateTo = useNavigate()
    const dispatch = useDispatch()
    const redirect = () => {
        dispatch({ type: "SET_ACTIVE_GOAL_ID", payload: index - 1 })
        navigateTo('/goals/course')
    }
    return (
        < Card >
            <CardHeader>
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={image}
                    width={40}
                />
            </CardHeader>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                    <p className="text-small text-default-500">{description}</p>
                </div>
                <div className="flex gap-4 items-right card-button">
                    <Button onClick={redirect} isIconOnly radius="full" color={colors[index]} aria-label="Like">
                        <PlayArrowIcon />
                    </Button>
                </div>
            </CardHeader>
            <Divider />
            <CardFooter>
                <Progress
                    isStriped
                    aria-label="Progress"
                    color={colors[index % colors.length]}
                    value={progress}
                    className="max-w-full"
                    label="Progress"
                    size="md"
                    maxValue={100}
                    formatOptions={{ style: "percent" }}
                    showValueLabel={true}
                />
            </CardFooter>
        </Card >
    );
}
