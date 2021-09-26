import React, { useEffect, useState } from 'react';
import Artists from '../Artists/Artists';
import Cart from '../Cart/Cart';
import Detail from '../Detail/Detail';
import './Home.css';

const Home = () => {
    const [artists, setArtists] = useState([]);
    const [cart, setCart] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect( () => {
        fetch('./artists.json')
        .then(res => res.json())
        .then( data => setArtists(data))
    }, []);

    const handleAddToCart = (artist) => {
        // console.log(artist);
        const newCart = [...cart, artist];
        setCart(newCart);
    }

    const handleShowDetails = (artist) => {
        // console.log(artist.name);
        const newDetail = [...details, artist];
        setDetails(newDetail);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9 border">
                    <div className="row container">
                        {
                            artists.map( artist => <Artists 
                                key={artist.age}
                                artist={artist}
                                handleAddToCart={handleAddToCart}
                                handleShowDetails={handleShowDetails}
                            ></Artists>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                    <br />
                    {
                        details.map( detail => <Detail 
                            key={detail.salary}
                            detail={detail}
                        ></Detail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;