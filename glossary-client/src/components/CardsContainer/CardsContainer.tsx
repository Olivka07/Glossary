import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { $glossary } from '../../model/store/units';
import { CardTermin } from '../CardTermin/CardTermin';
import classes from './cards-container.module.scss';

export const CardsContainer: FC = () => {
    const glossary = useUnit($glossary);
    return <div className={classes.cards__container}>{glossary && glossary.map((t) => <CardTermin termin={t} key={t.id} />)}</div>;
};
