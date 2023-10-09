import { Tag } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Spacer,
} from "@nextui-org/react";

export default function News({ news }) {
  return (
    <>
      {news.map(({ newsTitle, techName, newsLink }) => {
        console.log({ newsTitle, techName, newsLink });
        const title = `${techName} - ${newsTitle.slice(0, 30)}...`;
        return (
          <NewsCard key={title} title={title} description={newsTitle} link={newsLink} />
        );
      })}
    </>
  );
}

const NewsCard = ({ title, description, link }) => {
  return (
    <>
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">
            {" "}
            <Tag /> {title}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={link}>
          View the source Article.
        </Link>
      </CardFooter>
    </Card>
    <Spacer y={10}/>
    </>
  );
};
