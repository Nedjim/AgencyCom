import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <img src="app/img/logo.png" id='logo' className='inline-block'/>
                <div className='inline-block aside'>
                    <div className='social-network'>
                        <img src="app/img/fbk.png"/>
                        <img src="app/img/twitter.png"/>
                        <img src="app/img/linkedin.png"/>
                    </div>
                    <nav>
                        <li>ACCUEIL</li>
                        <li>AGENCE</li>
                        <li>REFERENCE</li>
                        <li>INTERNATIONAL</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </nav>
                </div>
            </header>
        )
    }
} 