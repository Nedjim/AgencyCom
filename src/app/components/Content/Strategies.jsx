import React from 'react';

export default class Strategies extends React.Component {
    render(){
        return (
            <div id='strategies'>
                <div>
                    <div>
                        <img src='app/img/picto/eye.png'/>
                        <h3><span>STRATEGIE </span><br/>DE MARQUE</h3>
                        <p>(Direction artistique, concept créatif...)</p>
                    </div>
                    <div>
                        <img src='app/img/picto/mouse.png'/>
                        <h3><span>STRATEGIE </span><br/>DIGITALE </h3>
                        <p>(Ergonomie, design, développement...)</p>
                    </div>
                    <div>
                        <img src='app/img/picto/message.png'/>
                        <h3><span>CONSEIL </span><br/>OPERATIONNEL</h3>
                        <p>(Média & hors-média, off & on-line...)</p>
                    </div>
                    <div>
                        <img src='app/img/picto/pen.png'/>
                        <h3><span>STRATEGIE</span> <br/>RP/INFLUENCE</h3>
                        <p>(Rédaction CP événement 2.0...)</p>
                    </div>
               </div>
            </div>
        )
    }
} 