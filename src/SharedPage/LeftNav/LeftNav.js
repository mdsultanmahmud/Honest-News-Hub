import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category, setCategory] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <h5>All Category: {category.length}</h5>
            {
                category.map(cat => 
                    <p 
                    key={cat.id}>
                        <Link to={`/category/${cat.id}`}>{cat.name}</Link>
                    </p>
               )
            }
        </div>
    );
};

export default LeftNav;