import React, { FC, useEffect, useState } from 'react';
import { HeaderNavbar } from '../HeaderNavbar/HeaderNavbar';
import classes from './header.module.scss';
import { PAGES_ENUM } from '../../consts';
import { AuthorRef } from '../AuthorRef/AuthorRef';

interface HeaderProps {
    page: PAGES_ENUM;
}
export const Header: FC<HeaderProps> = ({ page }) => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY !== 0) setScrolling(true);
            else setScrolling(false);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <header
            className={`${scrolling ? `${classes.header__container} ${classes.header__container_hidden}` : `${classes.header__container}`}`}
        >
            <HeaderNavbar page={page} />
            <AuthorRef />
        </header>
    );
};
