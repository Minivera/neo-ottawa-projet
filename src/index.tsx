import React from 'react';
import { render } from 'react-dom';

import './languages/i18n';
import { App } from './layout/app';

render(<App />, document.querySelector('#app'));
