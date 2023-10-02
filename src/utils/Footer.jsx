import React, { useEffect, useState } from "react";
import fetchData from "../service/fetchData";
import { QUOTES_URL } from "../constants/endpoints";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
import { Typography } from "@mui/material";

export default function Footer() {
  const defaultQuotes = [
    {
      id: "d7e4bba1-8495-4e15-9341-3b71566d5e42",
      quote:
        "Success is the sum of small efforts, repeated day in and day out.",
    },
    {
      id: "a1e9f8c8-3ea3-4a37-9d01-7e18918b4187",
      quote: "The journey of a thousand miles begins with one step.",
    },
    {
      id: "5f06a80b-4410-42cc-90d1-fcbe062ee682",
      quote: "Set your goals high and don't stop until you get there.",
    },
  ];
  const [quotes, setQuotes] = useState(["", "", ""]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await fetchData(QUOTES_URL);
        setQuotes(response?.quotes);
      } catch (error) {
        setQuotes(defaultQuotes);
      } finally {
        setIsLoading(false);
      }
    };
    getQuotes();
  }, []);
  return (
    <div className="footer">
      <div style={{ display: "flex" }}>
        {quotes.map((quote, index) => (
          <div key={quote.id} style={{ padding: "1%" }}>
            <FooterCard isLoading={isLoading} index={index + 1}>
              {quote.quote}
            </FooterCard>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterCard({ index, children, isLoading }) {
  const colors = ["warning", "sucess", "secondary"];
  if (isLoading) {
    return (
      <div>
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300">TEST</div>
        </Skeleton>
      </div>
    );
  }
  return (
    <Card>
      <CardBody>
        <i>“{children}”</i>
      </CardBody>
    </Card>
  );
}
