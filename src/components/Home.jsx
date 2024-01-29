import { useEffect, useState } from 'react';
import axios from 'axios';
import MainHomePageItem from './MainHomePageItem';
import { v4 as uuid } from 'uuid';
import ResetSessionStorage from './ResetSessionStorage';
import Team from './Team';
import TeamSmallerVersion from './TeamSmallerVersion';
import Footer from './Footer';
const Home = () => {
    const [articles, setArticles] = useState(null);
    const country = 'us';
    const API_KEY = import.meta.env.VITE_MY_KEY;
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

    useEffect(() => {
        if (sessionStorage.getItem('homeSessionStorage')) {
            let originalData = JSON.parse(
                sessionStorage.getItem('homeSessionStorage')
            );
            setArticles(originalData);
        } else {
            axios
                .get(URL)
                .then((response) => {
                    setArticles(response.data?.articles);

                    sessionStorage.setItem(
                        'homeSessionStorage',
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
        <div className="main-big-container">
            <h1 className="main-heading">HOME</h1>
            <p></p>
            <ResetSessionStorage setArticles={setArticles} url={URL} />
            <ul className="main-grid-container">
                {articles &&
                    articles.slice(0, 8).map((article, index) => {
                        return (
                            <MainHomePageItem
                                articleIndex={index}
                                article={{ ...article, id: uuid() }}
                                key={uuid()}
                            />
                        );
                    })}
            </ul>
            <section className="main-teamSmallerVersion-section">
                <TeamSmallerVersion />
            </section>

            

            
        </div>

        <Footer />

        </>
    );
};
export default Home;
