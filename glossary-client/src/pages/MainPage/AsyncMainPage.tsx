import { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

export const AsyncMainPage = Loadable(lazy(() => import('./MainPage')));
