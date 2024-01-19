import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import MainThemePageItem from './MainThemePageItem';
import ResetSessionStorage from './ResetSessionStorage';
import Footer from './Footer';

const Tech = () => {
    const [articles, setArticles] = useState([]);
    const country = 'us';
    const category = 'technology';
    const API_KEY = import.meta.env.VITE_MY_KEY;
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

    useEffect(() => {
        if (sessionStorage.getItem('techSessionStorage')) {
            let originalData = JSON.parse(
                sessionStorage.getItem('techSessionStorage')
            );
            setArticles(originalData);
        } else {
            axios
                .get(URL)
                .then((response) => {
                    setArticles(response.data?.articles);

                    sessionStorage.setItem(
                        'techSessionStorage',
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
            <h1 className="theme-heading">TECHNOLOGY</h1>
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
            <footer />
        </div>

        
        </>
    );
};
export default Tech;
