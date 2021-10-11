import React from 'react';
import { render } from 'react-dom';
import 'rc-slider/assets/index.css';

import './languages/i18n';
import { App } from './layout/app';

render(<App />, document.querySelector('#app'));
