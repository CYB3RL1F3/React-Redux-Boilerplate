import React from 'react';
// import { Link } from 'react-router-dom';
import { footer } from 'styles/footer.scss';
import Routes from 'routes';

const App = () =>
    <div>
        <h1>Application</h1>
        { Routes }
        <footer className={footer}>

        </footer>
    </div>;

export default App;
