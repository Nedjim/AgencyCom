import React from 'react';
import Actualites from './Actualites.jsx';

export default class Content extends React.Component {
    render(){
        return (
            <div id='content'>
                <h1>PLUS D'ENERGIE VITALE <br/>POUR ENTRER DANS LA VIE DE NOS CLIENTS</h1>
                <div className='description'>
                   <p> Preferendum met à votre disposition des équipes expertes pour faire battre le coeur de votre Marque à chaque <br/>
                   étape de ses vies publicitaire, opérationnel, digitale et média...</p>
                   <p>Preferendum est une agence de communication qui accompagnera votre marque pas à pas tout au long de ses <br/>
                   différentes vies pour la faire connaître, grandir, évoluer, se moderniser, renaître... </p>
                </div>
                <Actualites />
            </div>
        )
    }
} 