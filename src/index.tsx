import React from 'react';
import { render, hydrate } from 'react-dom';
import 'rc-slider/assets/index.css';

import './languages/i18n';
import { App } from './layout/app';

if (import.meta.env.PROD) {
    hydrate(<App />, document.querySelector('#app'));
} else {
    render(<App />, document.querySelector('#app'));
}
