import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsShortCard from '../../SharedPage/NewsShortCard/NewsShortCard';

const Home = () => {
    const news = useLoaderData()
    useTitle('Home')
    return (
        <div>
            {/* <Helmet>
                <title>honest news home page</title>
            </Helmet> */}
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