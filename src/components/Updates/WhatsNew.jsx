import { Tag } from "@mui/icons-material";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function WhatsNew({ tech }) {
    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md"><Tag/> {tech?.techName}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <h2>{tech?.techTitle}</h2>
                    <p>{tech?.techSummary}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href={tech?.websiteUrl}
                    >
                        View the source Article.
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}