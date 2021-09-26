import React from 'react';
import './Detail.css';

const Detail = (props) => {
    // console.log(props.detail);
    const {name, age, role} = props.detail;
    return (
        <div>
            <h3>Detail: {name}</h3>
            <p>Age: {age}  Role: {role}</p>
        </div>
    );
};

export default Detail;