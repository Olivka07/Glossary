import React, { ElementType, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AsyncMainPage } from '../pages/MainPage/AsyncMainPage';
import { AsyncGraphPage } from '../pages/GraphPage/AsyncGraphPage';
import './styles/index.scss';
import { GateGlossary } from '../model/store/units';

export const App = () => {
    return (
        <>
            <GateGlossary />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Routes>
                    <Route path="/graph" element={<AsyncGraphPage />} />
                    <Route path="*" element={<AsyncMainPage />} />
                </Routes>
            </div>
        </>
    );
};

function withRouter(Component: ElementType) {
    return function (...props: any) {
        return (
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        );
    };
}

export default withRouter(App);
