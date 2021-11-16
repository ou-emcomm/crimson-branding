/* eslint-disable no-unused-vars, no-unused-expressions, global-require */
import './style/style.scss';
import './components/Preferences/index';

process.env.NODE_ENV !== 'production' && require('./components/Nav/index');
process.env.NODE_ENV !== 'production' && require('./components/Footer/index');
