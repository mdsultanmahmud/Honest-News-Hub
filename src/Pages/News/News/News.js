import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
const News = () => {
    const news = useLoaderData()
    const { _id, author, title, thumbnail_url, rating, total_view, details,category_id } = news
    console.log(news)
    return (
        <Card style={{ width: '90%', margin:'15px auto' }}>
            <Card.Img style={{ width: '100%', height: '350px'}} variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="outline-secondary"><Link to={`/category/${category_id}`}>Go to category</Link></Button>
            </Card.Body>
        </Card>
    );
}

export default News;