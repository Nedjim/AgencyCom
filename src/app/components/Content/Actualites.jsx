import React from 'react';
import data from '../../data/data.js';

export default class Actualites extends React.Component {
    render(){
        console.log(data);
        return (
            <div className='actualites'>
                <h1>ACTUALITES</h1>
            </div>
        )
    }
} 