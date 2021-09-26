import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Artists.css';

const Artists = (props) => {
    // console.log(props);
    const {name, role, age, country, salary, img} = props.artist;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const detailIcon = <FontAwesomeIcon icon={faDatabase} />
    return (
        <div>
            
                <div className='artist-container'>
                    <div >
                        <img className="artist-image" src={img} alt="" />
                    </div>
                    <h6>Name: {name}</h6>
                    <h6>Role: {role}</h6>
                    <h6>Age: {age}</h6>
                    <h6>Country: {country}</h6>
                    <h6>Salary: {salary}</h6>
                    <button onClick={ () => props.handleAddToCart(props.artist)} className="btn btn-info mt-3 mb-3">{cartIcon} Add Salary to Cart</button>
                    <button onClick={ () => props.handleShowDetails(props.artist)} className="btn btn-primary mt-3 mb-3 mx-4">{detailIcon} Details</button>
                </div>
            
        </div>
    );
};

export default Artists;