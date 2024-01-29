import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import MainThemePageItem from './MainThemePageItem';
import ResetSessionStorage from './ResetSessionStorage';
import Footer from './Footer';
// import { useContext } from "react";
// import { MyContext } from "../contexts/Context";

const Sport = () => {
    const [articles, setArticles] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)
    const country = 'us';
    const category = 'sports';
    const API_KEY = import.meta.env.VITE_MY_KEY;
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

    // const { id } = useContext(MyContext);

    useEffect(() => {
        if (sessionStorage.getItem('sportSessionStorage')) {
            let originalData = JSON.parse(
                sessionStorage.getItem('sportSessionStorage')
            );
            setArticles(originalData);
        } else {
            axios
                .get(URL)
                .then((response) => {
                    setArticles(response.data?.articles);

                    sessionStorage.setItem(
                        'sportSessionStorage',
                        JSON.stringify(response.data?.articles)
                        //JSON.stringify(articles)
                    );
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, []);

    return (

        <>
        <div className="theme-big-container">
            <h1 className="theme-heading">SPORT</h1>
            <p></p>
            <ResetSessionStorage setArticles={setArticles} url={URL} />
            <ul className="theme-grid-container">
                {articles.map((article, index) => {
                    if (index < 16 && article.description !== null && article.title !=='[Removed]') {
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
        <Footer />
        
        </>
    );
};
export default Sport;
