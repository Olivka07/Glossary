import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './header-navbar.module.scss';
import { PAGES_ENUM } from '../../consts';

interface HeaderNavbarProps {
    page: PAGES_ENUM;
}
export const HeaderNavbar: FC<HeaderNavbarProps> = ({ page }) => {
    return (
        <nav className={classes.header__nav}>
            <Link className={page === PAGES_ENUM.Main ? classes.active__link : classes.link} to={'/'}>
                &#128218; Глоссарий
            </Link>
            <Link className={page === PAGES_ENUM.Graph ? classes.active__link : classes.link} to={'/graph'}>
                &#129526; Семантический граф
            </Link>
        </nav>
    );
};
