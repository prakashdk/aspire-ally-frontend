import { Button, ButtonGroup, Input } from "@nextui-org/react";

export default function GoalInputGroup({ input, setInput, clickEvent, disabled }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            clickEvent()
        }}>
            <ButtonGroup className="flex">
                <div className="flex w-[80%] flex-wrap md:flex-nowrap gap-4">
                    <Input disabled={disabled} value={input} onChange={(e) => setInput(e.target.value)} size="sm" type="text" label="What is your goal?" />
                </div>
                <Button disabled={disabled} onClick={clickEvent} size="lg">Add</Button>
            </ButtonGroup>
        </form>
    )
}