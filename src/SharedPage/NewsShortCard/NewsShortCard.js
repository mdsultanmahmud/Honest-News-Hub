import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareAlt,FaStar, FaEye} from 'react-icons/fa';
const NewsShortCard = ({ singleNews }) => {
    const { _id, author, title, thumbnail_url, rating, total_view, details } = singleNews
    return (
        <Card style={{ width: '85%', margin: '20px auto' }}>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <div className='me-2'>
                        <Image
                            src={author.img}
                            style={{height:'60px'}}
                            roundedCircle
                        ></Image>
                    </div>
                    <div>
                        <p className={'m-0'}>{author.name}</p>
                        <p className={'m-0'}>{author.published_date}</p>
                    </div>
                </div>

                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Img style={{ width: '90%', height: '350px', margin: '10px auto' }} variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)}<Link to={`/news/${_id}`}> show more...</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default NewsShortCard;