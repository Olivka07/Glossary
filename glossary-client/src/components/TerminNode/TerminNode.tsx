import React, { FC, MouseEvent, useCallback, useEffect, useState } from 'react';
import { ITermin } from '../../model/types';
import classes from './termin-node.module.scss';
import { Relation } from '../Relation/Relation';

interface TerminNodeProps {
    t: ITermin;
    connectNodes: () => void;
}

interface Coordinates {
    x: number;
    y: number;
}

interface ITerminNode {
    current: Coordinates;
    position: Coordinates;
    relativePosition: Coordinates;
    dragging: boolean;
}
export const TerminNode: FC<TerminNodeProps> = ({ t, connectNodes }) => {
    const [state, setState] = useState<ITerminNode>({
        current: {
            x: t.initialX,
            y: t.initialY
        },
        position: {
            x: t.initialX,
            y: t.initialY
        },
        relativePosition: {
            x: t.initialX,
            y: t.initialY
        },
        dragging: false
    });

    const mouseDownHandler = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            setState((prev) => ({
                ...prev,
                current: {
                    x: e.clientX,
                    y: e.clientY
                },
                position: {
                    x: e.clientX,
                    y: e.clientY
                },
                dragging: true
            }));
        },
        [state.dragging]
    );

    const mouseMoveHandler = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            connectNodes();
            if (state.dragging) {
                setState((prev) => {
                    return {
                        ...prev,
                        current: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    };
                });
            }
        },
        [state]
    );

    const mouseLeaveHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (t.to) {
            t.to.forEach((target) => {
                const predicate = document.getElementById(`predicate_${t.id}_${target.id}`);
                predicate.classList.remove(classes.predicate__hover);
            });
        }
        setState((prev) => {
            return {
                position: {
                    x: state.current.x - (state.position.x - state.relativePosition.x),
                    y: state.current.y - (state.position.y - state.relativePosition.y)
                },
                current: {
                    x: state.current.x - (state.position.x - state.relativePosition.x),
                    y: state.current.y - (state.position.y - state.relativePosition.y)
                },
                relativePosition: {
                    x: state.current.x - (state.position.x - state.relativePosition.x),
                    y: state.current.y - (state.position.y - state.relativePosition.y)
                },
                dragging: false
            };
        });
    };

    const mouseUpHandler = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            setState(() => {
                return {
                    position: {
                        x: state.current.x - (state.position.x - state.relativePosition.x),
                        y: state.current.y - (state.position.y - state.relativePosition.y)
                    },
                    current: {
                        x: state.current.x - (state.position.x - state.relativePosition.x),
                        y: state.current.y - (state.position.y - state.relativePosition.y)
                    },
                    relativePosition: {
                        x: state.current.x - (state.position.x - state.relativePosition.x),
                        y: state.current.y - (state.position.y - state.relativePosition.y)
                    },
                    dragging: false
                };
            });
        },
        [state]
    );

    const mouseOverHandler = () => {
        if (t.to) {
            t.to.forEach((target) => {
                const predicate = document.getElementById(`predicate_${t.id}_${target.id}`);
                predicate.classList.add(classes.predicate__hover);
            });
        }
    };

    // const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    //     e.preventDefault();
    // };

    return (
        <>
            <div
                style={{
                    transform: `translate(${state.current.x - (state.position.x - state.relativePosition.x)}px, ${state.current.y - (state.position.y - state.relativePosition.y)}px)`
                }}
                id={`node-${t.id}`}
                onMouseOver={() => mouseOverHandler()}
                className={state.dragging ? `${classes.graph__node} ${classes.graph__node_dragging}` : `${classes.graph__node}`}
                draggable={true}
                onMouseDown={(e) => mouseDownHandler(e)}
                onMouseMove={(e) => mouseMoveHandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
                onMouseUp={(e) => mouseUpHandler(e)}
                // onMo
            >
                {t.termin}
            </div>
            {/* {t.to &&
                t.to.length > 0 &&
                t.to.map((pred) => {
                    return <Relation key={`${t.id}_${pred.id}_${pred.predicate}`} from={t.id} to={pred.id} predicate={pred.predicate} />;
                })} */}
        </>
    );
};
