import { createEffect, createStore, sample } from 'effector';
import { ITermin } from '../types';
import { createGate } from 'effector-react';
import { fetchGlossary } from '../api';

export const $glossary = createStore<ITermin[]>(null);
export const fetchGlossaryFx = createEffect('Fetch glossary', {
    handler: fetchGlossary
});
export const GateGlossary = createGate();

sample({
    clock: fetchGlossaryFx.doneData,
    target: $glossary
});

sample({
    clock: GateGlossary.open,
    target: fetchGlossaryFx
});
