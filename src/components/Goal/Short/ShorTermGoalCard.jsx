import React from "react";

import { Accordion, AccordionItem, Checkbox, Chip } from "@nextui-org/react";
import Tasks from "./Tasks";

export default function ShortTermGoalCard({ title, data }) {
  const { topic, actions, timeSpan } = data ?? {};
  return (
    <div className="action-panel">
      <div className="flex gap-4">
        <p>{topic}</p>
        <Chip color="default">{timeSpan}</Chip>
      </div>
      <div class="action">
        <Accordion selectionMode="multiple" variant="bordered">
          {actions &&
            actions.map((action) => (
              <AccordionItem key={action} aria-label={action} title={action}>
                <Tasks step={`${action} for ${title}`} />
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
