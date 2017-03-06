import React from 'react';
import Header from './Header/Header.jsx';
import Banner from './Banner/Banner.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Content />
                <Footer />
            </div>
        )
    }
}