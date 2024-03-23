import React, { FC } from 'react';
import { ITermin } from '../../model/types';
import { Card, Col, ConfigProvider } from 'antd';
import classes from './card-termin.module.scss';

interface CardTerminProps {
    termin: ITermin;
}
export const CardTermin: FC<CardTerminProps> = ({ termin }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        headerFontSize: 32
                    }
                }
            }}
        >
            <Card
                className={classes.card__container}
                title={
                    <div className={classes.card__title}>
                        <strong>{termin.termin}</strong>
                    </div>
                }
                bordered={false}
            >
                <p>
                    <i>{termin.definition}</i>
                </p>
            </Card>
        </ConfigProvider>
    );
};
