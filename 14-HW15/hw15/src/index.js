import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import {ANAKIN_IMAGE, RAY_IMAGE} from './constatnts'
import Post from "./Components/Post";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
        }}
              content='WTF? Who is Ray? Why she is Skywalker? Luke...?'
              image={RAY_IMAGE}
              date={"26 февр."}/>
    </React.StrictMode>
);
