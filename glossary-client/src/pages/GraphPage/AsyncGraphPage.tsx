import { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

export const AsyncGraphPage = Loadable(lazy(() => import('./GraphPage')));
