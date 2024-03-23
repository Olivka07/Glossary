import { useUnit } from 'effector-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { $glossary } from '../../model/store/units';
import { TerminNode } from '../TerminNode/TerminNode';
import { ITermin } from '../../model/types';
import classes from './canvas.module.scss';
import { Relation } from '../Relation/Relation';
import { getNodeCharacteristics } from '../../helpers/model';

function connectNodes(glossary: ITermin[]) {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    glossary.forEach((node) => {
        if (node.to && node.to.length > 0) {
            const {
                width: sourceWidth,
                height: sourceHeight,
                translateX: sourceTranslateX,
                translateY: sourceTranslateY,
                left: sourceLeft,
                top: sourceTop
            } = getNodeCharacteristics(node.id);

            node.to.forEach((target) => {
                const {
                    width: targetWidth,
                    height: targetHeight,
                    translateX: targetTranslateX,
                    translateY: targetTranslateY,
                    left: targetLeft,
                    top: targetTop
                } = getNodeCharacteristics(target.id);
                context.beginPath();
                context.strokeStyle = 'rgb(99, 99, 99)';

                context.moveTo(sourceWidth / 2 + sourceLeft + sourceTranslateX, sourceHeight / 2 + sourceTop + sourceTranslateY);
                context.lineTo(targetWidth / 2 + targetLeft + targetTranslateX, targetHeight / 2 + targetTop + targetTranslateY);
                if (context.lineWidth) {
                    context.lineWidth = 2;
                }
                context.stroke();

                const y =
                    (Math.min(targetTranslateY + targetHeight / 2, sourceTranslateY + sourceHeight / 2) +
                        Math.max(targetTranslateY + targetHeight / 2, sourceTranslateY + sourceHeight / 2)) /
                    2;

                const x =
                    (Math.min(targetTranslateX + targetWidth, sourceTranslateX + sourceWidth) +
                        Math.max(targetTranslateX, sourceTranslateX)) /
                    2;

                const predicate = document.getElementById(`predicate_${node.id}_${target.id}`);

                predicate.style.setProperty(
                    'transform',
                    `translate(${x - predicate.getBoundingClientRect().width / 2}px, ${y - predicate.getBoundingClientRect().height / 2 - predicate.getBoundingClientRect().height / 8}px)`
                );
            });
        }
    });
}

export const Canvas = () => {
    const glossary = useUnit($glossary);

    useEffect(() => {
        connectNodes(glossary);
    }, []);

    return (
        <>
            <canvas className={classes.canvas} id="canvas" width={window.innerWidth} height={window.innerHeight} />
            {glossary && glossary.map((t) => <TerminNode connectNodes={() => connectNodes(glossary)} key={t.id} t={t} />)}
            {glossary &&
                glossary.map((t) => {
                    if (t.to) {
                        return (
                            <Fragment key={`${t.id}_${t.to.join('_')}`}>
                                {t.to &&
                                    t.to.length > 0 &&
                                    t.to.map((pred) => {
                                        return (
                                            <Relation
                                                key={`${t.id}_${pred.id}_${pred.predicate}`}
                                                from={t.id}
                                                to={pred.id}
                                                predicate={pred.predicate}
                                            />
                                        );
                                    })}
                            </Fragment>
                        );
                    }
                    return null;
                })}
        </>
    );
};
