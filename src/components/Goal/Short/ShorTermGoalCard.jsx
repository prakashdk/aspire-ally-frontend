import React from "react";

import { Checkbox, Chip } from "@nextui-org/react";

export default function ShortTermGoalCard({ data }) {
  const { topic, actions, timeSpan } = data ?? {};
  return (
    <div className="action-panel">
      <div className="flex gap-4">
        <p>{topic}</p>
        <Chip color="default">{timeSpan}</Chip>
      </div>
      <div class="action">
        <ul>
          {actions &&
            actions.map((action) => (
              <li key={action}>
                <Checkbox lineThrough>{action}</Checkbox>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
