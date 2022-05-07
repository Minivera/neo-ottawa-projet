import React from 'react';
import { renderToString } from 'react-dom/server';
import 'rc-slider/assets/index.css';

import './languages/i18n';
import { App } from './layout/app';
import { getLazyAssetsLinks } from './hooks/useLazyAssetLoading';
import { imageSSRLinks } from './hooks/useLoading';

export const render = async (): Promise<[string, string]> => {
    const links = await getLazyAssetsLinks();

    const markup = renderToString(<App />);

    return [links + '\n' + imageSSRLinks.join('\n'), markup];
};
