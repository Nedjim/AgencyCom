import React from 'react';

export default class Publications extends React.Component {  
    render(){
        return (
            <div id='publications'>
                <h1>Télécharger nos publications</h1>
                <div>
                    <div>
                        <img src='app/img/books/book-strat1.jpg'/>
                        <p>5 étapes nécessaires pour repenser votre <span>stratégie marketing</span>.</p>
                    </div>
                    <div>
                        <img src='app/img/books/book-rwd.jpg'/>
                        <p>Découvrez les raisons pour lesquels vous ne pouvez-vous priver du <span>Responsive Design </span>pour vos sites.</p>
                    </div>
                    <div>
                        <img src='app/img/books/book-digital.jpg'/>
                        <p>L’agriculture à l’ère du digital : la nouvelle donne de la <span>communication agricole</span>.</p>
                    </div>
                </div>
            </div>
        )
    }
} 