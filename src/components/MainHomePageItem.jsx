import React from 'react';

const MainHomePageItem = ({ articleIndex, article }) => {
    return (
        <li key={article.id} style={{ gridArea: `a${articleIndex}` }}>
            <a target="_blank" className="main-item-link" href={article.url}>
                <img
                    className="main-item-img"
                    src={article.urlToImage}
                    alt=""
                />
                <h3 className="main-item-title ">{article.title}</h3>
            </a>
        </li>
    );
};

export default MainHomePageItem;
