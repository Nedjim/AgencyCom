import React from 'react';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <img src='app/img/slide-1.jpg' className='slide'/>
                <Content />
                <Footer />
            </div>
        )
    }
}