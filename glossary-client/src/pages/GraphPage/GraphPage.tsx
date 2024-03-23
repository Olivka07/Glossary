import React from 'react';
import { PAGES_ENUM } from '../../consts';
import { Header } from '../../components/Header/Header';
import { ButtonToUp } from '../../components/ButtonToUp/ButtonToUp';
import { Canvas } from '../../components/Canvas/Canvas';

const GraphPage = () => {
    return (
        <>
            <Header page={PAGES_ENUM.Graph} />
            <main>
                <Canvas />
                <ButtonToUp />
            </main>
        </>
    );
};

export default GraphPage;
