import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Progress, Button } from "@nextui-org/react";

export default function GoalCard({ image, header, body, progress, colorIndex = 1 }) {
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"]
    let navigateTo = useNavigate()
    const redirect = () => {
        navigateTo('/goals/short')
    }
    return (
        <Card>
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
                    <p className="text-md">{header}</p>
                    <p className="text-small text-default-500">{body}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Button onClick={redirect} isIconOnly radius="full" color={colors[colorIndex]} aria-label="Like">
                        <PlayArrowIcon />
                    </Button>
                </div>
            </CardHeader>
            <Divider />
            <CardFooter>
                <Progress
                    isStriped
                    aria-label="Progress"
                    color={colors[colorIndex % colors.length]}
                    value={progress}
                    className="max-w-full"
                    label="Progress"
                    size="md"
                    maxValue={100}
                    formatOptions={{ style: "percent" }}
                    showValueLabel={true}
                />
            </CardFooter>
        </Card>
    );
}
