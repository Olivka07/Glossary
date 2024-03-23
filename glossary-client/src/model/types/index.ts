export interface IPredicate {
    id: number;
    predicate: string;
}

export interface ITermin {
    id: number;
    termin: string;
    definition: string;
    initialX: number;
    initialY: number;
    to?: IPredicate[];
}

export interface IApiResponse<T> {
    data: T;
}
