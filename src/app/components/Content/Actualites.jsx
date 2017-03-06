import React from 'react';
import data from '../../data/data.js';
import CreateActu from './CreateActu.jsx'

export default class Actualites extends React.Component {
    render(){
        return (
            <div className='actualites'>
                <h1>ACTUALITES</h1>
                <div>
                    {
                        data.map((actu, index )=> {
                            return (
                                <CreateActu key={index} 
                                            title={actu.title} 
                                            img={actu.img} 
                                            date={actu.date}
                                            description={actu.description}/>
                            )
                        })
                    }
                    <div className='more'>
                        <span>Plus d'actus</span>
                        <img src='app/img/more.png'className='more-icone'/>
                    </div>
                    </div>
            </div>
        )
    }
} 