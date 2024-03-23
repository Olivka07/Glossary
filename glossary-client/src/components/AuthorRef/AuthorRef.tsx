import React from 'react';
import { Link } from 'react-router-dom';
import classes from './author-ref.module.scss';

export const AuthorRef = () => {
    return (
        <button className={classes.ref__button}>
            <Link className={classes.ref__a} target="blank" to={'https://vk.com/0livka7'}>
                &#9993; Александр Пирюшов
            </Link>
        </button>
    );
};
