import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        // padding:500,
        // paddingBottom:100
    }}>
        <div
            align="center"
            style={{
                position: 'absolute',
                right: '5%',
                bottom: '5%',
                zIndex: 1,
                textShadow:'1px 1px white'               
            }}>
            <h1 style={{margin:0}}>Querator AI</h1>
            <span>present by UDIC</span>
        </div>

        <App key={"1"} R={true} />
        <App key={"1"} R={false} />
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
