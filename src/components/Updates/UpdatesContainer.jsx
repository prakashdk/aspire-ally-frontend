import News from "./News";
import WhatsNew from "./WhatsNew";
import Loader from "../../shared/Loader";
import { useEffect, useState } from "react";
import useFetch from "../../shared/hooks/useFetch";
import { NEWS_URL, UPDATES_URL } from "../../constants/endpoints";
import Jumbotron from "../../utils/Jumbotron";
import { Tab, Tabs } from "@nextui-org/react";
import {
  Newspaper,
  Refresh,
  RefreshRounded,
  RefreshSharp,
  TipsAndUpdates,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function UpdatesContainer() {
  const goal = "Learn Kubernetes";
  const techNews = useFetch(NEWS_URL, { goal });
  const updates = useFetch(UPDATES_URL, { goal });
  const [selected, setSelected] = useState("news");

  const Style = {
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
  };
  const refresh = () => {
    location.reload();
  };

  if (techNews.isLoading || updates.isLoading) {
    return <Loader label="Hold On!" />;
  }

  return (
    <>
      <Tabs
        fullWidth
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        color="primary"
      >
        <Tab
          key="news"
          title={
            <div className="flex items-center space-x-2">
              <Newspaper />
              <span style={{ padding: "10px" }}>News</span>
            </div>
          }
        >
          <Jumbotron title="News 📰" />
          <div style={{ padding: "5%" }}>
            {techNews?.data?.techNewsResults ? (
              <News news={techNews.data.techNewsResults}></News>
            ) : (
              <div className="center">
                <p>Currently No News </p>
                <IconButton onClick={refresh}>
                  <RefreshSharp />
                </IconButton>
              </div>
            )}
          </div>
        </Tab>
        <Tab
          key="updates"
          title={
            <div className="flex items-center space-x-2">
              <TipsAndUpdates />
              <span style={{ padding: "10px" }}> Updates</span>
            </div>
          }
        >
          <Jumbotron title="What's New & How to do it 🤩" />
          <div className="frame" style={{ padding: "5%" }}>
            {updates?.data?.techUpdateResults ? (
              <WhatsNew tech={updates.data.techUpdateResults}></WhatsNew>
            ) : (
              <div className="center">
                <p>Currently No News Things</p>
                <IconButton onClick={refresh}>
                  <RefreshSharp />
                </IconButton>
              </div>
            )}
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
