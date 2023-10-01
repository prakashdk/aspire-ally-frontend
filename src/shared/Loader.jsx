import { Spinner } from "@nextui-org/react";

export default function Loader({label}) {
    return (
        <div className="loader">
            <Spinner label={label} color="warning" />
        </div>
    )
}