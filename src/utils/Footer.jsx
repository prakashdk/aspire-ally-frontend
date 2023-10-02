import React, { useEffect, useState } from "react";
import fetchData from "../service/fetchData";
import { QUOTES_URL } from "../constants/endpoints";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
import { Typography } from "@mui/material";
import useFetch from "../shared/hooks/useFetch";

export default function Footer() {
  const { data, isLoading, error } = useFetch(QUOTES_URL);
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

  return (
    <div className="footer">
      <div className="grid">
        {(error ? defaultQuotes : (data?.quotes ?? ["","",""])).map((quote, index) => (
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
  const colors = ["#e91e63", "#4caf50", "#ff5722"];
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
    <div>
      <Card>
        <CardBody>
          <i style={{ color: colors[index - 1] }}>“{children}”</i>
        </CardBody>
      </Card>
    </div>
  );
}
