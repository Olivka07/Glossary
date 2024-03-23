import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import classes from './button-to-up.module.scss';

export const ButtonToUp = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY !== 0) setScrolling(true);
            else setScrolling(false);
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const clickHandler = () => {
        window.scrollTo({ top: 0 });
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultHoverBg: 'rgb(5, 5, 157)',
                        defaultHoverColor: 'white'
                    }
                }
            }}
        >
            <Button
                onClick={clickHandler}
                className={`${scrolling ? `${classes.button__toUp}` : `${classes.button__toUp} ${classes.button__toUp_hidding}`}`}
            >
                ↑ Наверх
            </Button>
        </ConfigProvider>
    );
};
