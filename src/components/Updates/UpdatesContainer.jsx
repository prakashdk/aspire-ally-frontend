import News from "./News";
import WhatsNew from "./WhatsNew";

import { useEffect, useState } from "react";

export default function UpdatesContainer() {

    const tech = "Learn Kubernetes"
    const [news, setNews] = useState([])
    const [whatsNew, setWhatsNew] = useState([])

    useEffect(() => {
        const fetchNewsData = async () => {
            const response = await fetch(`http://localhost:3000/dev/api/tech/news?goal=${tech}`);
            const data = await response.json();
            setNews(data.response?.techNewsResults);
        }
        const fetchWhatsNewData = async () => {
            const response = await fetch(`http://localhost:3000/dev/api/tech/whats-new-update?goal=${tech}`);
            const data = await response.json();
            console.log(data.response?.techUpdateResults)
            setWhatsNew(data.response?.techUpdateResults);
        }
        fetchNewsData();
        fetchWhatsNewData();
    }, [])

    const Style = {
        fontSize: "1.4rem",
        marginBottom: "0.5rem"
    }

    return (
        <>
            <h2 style={Style} className="updates__title">News 📰</h2 >
            {
                news ?
                    news.map(n => {
                        return <News news={n}></News>
                    })
                    :
                    < p > Currently No News</p >}

            <h2 style={Style} className="updates__title">What's New & How to do it 🤩</h2>

            {
                whatsNew ?
                    <WhatsNew tech={whatsNew}></WhatsNew>
                    :
                    <p>Currently No News Things</p>
            }
        </>
    )
}