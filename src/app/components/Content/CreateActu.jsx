import React from 'react';
import Actualites from './Actualites.jsx';

export default class Content extends React.Component {  
    render(){
        console.log(this.props);
        return (
            <div className='actu inline-block'>
                <img src={this.props.img}/>
                <p className='date'>{this.props.date}</p>
                <h3 className='title-actu'>{this.props.title}</h3>
                <p className='description'>{this.props.description}</p>
                <p className='plus'>Lire la suite +</p>
            </div>
        )
    }
} 