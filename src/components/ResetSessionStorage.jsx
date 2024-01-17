import axios from 'axios';

const ResetSessionStorage = ({ setArticles, url }) => {
    const refetchStorage = () => {
        console.log('refetching');
        axios
            .get(url)
            .then((response) => {
                setArticles(response.data?.articles);
                sessionStorage.setItem(
                    'sportSessionStorage',
                    JSON.stringify(response.data?.articles)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <button className="refresh-button" onClick={refetchStorage}>
                REFRESH
            </button>
        </div>
    );
};
export default ResetSessionStorage;
