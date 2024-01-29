import { useEffect, useState } from "react";
import axios from "axios";
import MainThemePageItem from "./MainThemePageItem";
import { v4 as uuid } from "uuid";
import ResetSessionStorage from "./ResetSessionStorage";
import Footer from "./Footer";

const Entertainment = () => {
    const [articles, setArticles] = useState([]);
    const country = "us";
    const category = "entertainment";
    const API_KEY = import.meta.env.VITE_MY_KEY;
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

    useEffect(() => {
        if (sessionStorage.getItem("entertainmentSessionStorage")) {
            let originalData = JSON.parse(
                sessionStorage.getItem("entertainmentSessionStorage")
            );
            setArticles(originalData);
        } else {
            axios
                .get(URL)
                .then((response) => {
                    setArticles(response.data?.articles);

                    sessionStorage.setItem(
                        "entertainmentSessionStorage",
                        JSON.stringify(response.data?.articles)
                        //JSON.stringify(articles)
                    );
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, []);

    console.log("articles 2", articles);
    return (
        <>
            <div>
                <div className='theme-big-container'>
                    <h1 className='theme-heading'>ENTERTAINMENT</h1>
                    <p></p>
                    <ResetSessionStorage setArticles={setArticles} url={URL} />
                    <ul className='theme-grid-container'>
                        {articles.map((article, index) => {
                            if (index < 16 && article.description !== null && article.title !== '[Removed]') {
                                return (
                                    <MainThemePageItem
                                        article={{ ...article, id: uuid() }}
                                        key={uuid()}
                                    />
                                );
                            }
                        })}
                    </ul>
                </div>
                
            </div>

            <Footer />
            
        </>
    );
};
export default Entertainment;
