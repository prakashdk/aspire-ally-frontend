import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function News({ news }) {
    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">#{news?.techName}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>{news?.newsTitle}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href={news?.newsLink}
                    >
                        View the source Article.
                    </Link>
                </CardFooter>
            </Card>
            <br></br>
        </>
    )
}