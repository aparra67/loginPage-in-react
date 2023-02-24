import React from 'react';
import ReactDOM from 'react-dom/client';
import { Formulario } from './Formulario';
import './stylesheets/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div className='container'>
    <Formulario />
</div>)