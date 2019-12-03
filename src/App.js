import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {Layout,Header,HeaderRow,Textfield,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <>
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Juan Dev" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>

            </Navigation>
        </Header>
        <Drawer title="Tit">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>

            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>


    </>
     );
}

export default App;
