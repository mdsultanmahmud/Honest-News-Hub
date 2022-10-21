import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsShortCard from '../../SharedPage/NewsShortCard/NewsShortCard';

const Home = () => {
    const news = useLoaderData()
    return (
        <div>
            <h3>All news here : {news.length}</h3>
            {
                news.map(ns =>
                    <NewsShortCard
                        key={ns._id}
                        singleNews = {ns}
                    ></NewsShortCard>
                )
            }
        </div>
    );
};

export default Home;