import React, { FC, useEffect, useRef, useState } from 'react';
import { getNodeCharacteristics } from '../../helpers/model';
import classes from './relation.module.scss';

interface RelationProps {
    from: number;
    to: number;
    predicate: string;
}

export const Relation: FC<RelationProps> = ({ from, predicate, to }) => {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    // const span = useRef<HTMLSpanElement>();
    // useEffect(() => {
    //     if (document.getElementById(`node-${from}`) && document.getElementById(`node-${to}`)) {
    //         const {
    //             width: sourceWidth,
    //             height: sourceHeight,
    //             translateX: sourceTranslateX,
    //             translateY: sourceTranslateY,
    //             left: sourceLeft,
    //             top: sourceTop
    //         } = getNodeCharacteristics(from);

    //         const {
    //             width: targetWidth,
    //             height: targetHeight,
    //             translateX: targetTranslateX,
    //             translateY: targetTranslateY,
    //             left: targetLeft,
    //             top: targetTop
    //         } = getNodeCharacteristics(to);

    //         const y =
    //             (Math.min(targetTranslateY + targetHeight / 2, sourceTranslateY + sourceHeight / 2) +
    //                 Math.max(targetTranslateY + targetHeight / 2, sourceTranslateY + sourceHeight / 2)) /
    //             2;

    //         const x =
    //             (Math.min(targetTranslateX + targetWidth, sourceTranslateX + sourceWidth) + Math.max(targetTranslateX, sourceTranslateX)) /
    //             2;
    //         // const x =
    //         //     (Math.min(targetTranslateX + targetWidth / 2, sourceTranslateX + sourceWidth / 2) +
    //         //         Math.max(targetTranslateX + targetWidth / 2, sourceTranslateX + sourceWidth / 2)) /
    //         //     2;

    //         setX(x - span.current.getBoundingClientRect().width / 2);
    //         setY(y - span.current.getBoundingClientRect().height / 2 - span.current.getBoundingClientRect().height / 8);
    //     }
    // }, [
    //     document.getElementById(`node-${from}`)?.getBoundingClientRect().x,
    //     document.getElementById(`node-${from}`)?.getBoundingClientRect().y,
    //     document.getElementById(`node-${to}`)?.getBoundingClientRect().x,
    //     document.getElementById(`node-${to}`)?.getBoundingClientRect().y
    // ]);

    return (
        <span id={`predicate_${from}_${to}`} className={classes.relation}>
            {predicate}
        </span>
    );
};
