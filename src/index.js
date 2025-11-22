import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <h1>LATEST POSTS</h1>
    <div className='posts'>
      <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="5" autor="Jan Zieliński" color="grey"></LikeCounter>
      <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="16" autor="Robert Makłowicz" color="lightgrey"></LikeCounter>
      <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="10" autor="Patryk Lipka" color="aqua"></LikeCounter>
    </div> */}
  </React.StrictMode>
);
