import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsShortCard from '../../../SharedPage/NewsShortCard/NewsShortCard';
import {Helmet} from 'react-helmet'
import useTitle from '../../../hooks/useTitle';
const Category = () => {
    const categories = useLoaderData()
    useTitle('Category')
    return (
        <div>
            {/* <Helmet>
                <title>all category news here</title>
            </Helmet> */}
            <h3 className='text-center text-primary'>All news about this category: {categories.length}</h3>
            {
                categories.map(cat =>{
                   return <NewsShortCard 
                        key={cat._id}
                        singleNews = {cat}
                    ></NewsShortCard>
                })
            }
        </div>
    );
};

export default Category;