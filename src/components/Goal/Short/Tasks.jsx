import React from "react";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../shared/Loader";
import { TASK_URL } from "../../../constants/endpoints";
import { Checkbox, Chip, Link, Spinner } from "@nextui-org/react";
import { ArrowOutward } from "@mui/icons-material";

export default function Tasks({ step }) {
  const { data, isLoading, error } = useFetch(TASK_URL, { step });

  if (isLoading) {
    return (
      <div className="center">
        <Spinner label="Fetching Tasks..." color="warning" />
      </div>
    );
  }
  if (error) {
    return <div className="center error">Fetch Error. Try again</div>;
  }
  return (
    <div>
      <ul>
        <div>Tasks:</div>
        {data?.tasks &&
          data.tasks?.map((task) => (
            <li key={task.id}>
              <Checkbox lineThrough>{task.topic}</Checkbox>{" "}
              <Chip color="default">{task.timeSpan}</Chip>
              <p style={{ fontSize: "15px", fontWeight: "normal" }}>
                {task.description}
              </p>
              <ul>
                {task?.references &&
                  task?.references?.map((reference) => (
                    <li key={reference}>
                      <Link isExternal showAnchorIcon href={reference}>
                        {reference}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
