const MainThemePageItem = ({ article }) => {
    //console.log('sbiburro ', article);
    return (
        <li key={article.id}>
            <a target="_blank" className="theme-item-link" href={article.url}>
                <img
                    className="theme-item-img"
                    src={article.urlToImage}
                    alt=""
                />
                <h3 className="theme-item-title">{article.title}</h3>
            </a>
        </li>
    );
};
export default MainThemePageItem;
