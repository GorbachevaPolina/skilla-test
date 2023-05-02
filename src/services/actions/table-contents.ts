export const ADD_DAYS: "ADD_DAYS" = "ADD_DAYS";
export const SUBSTRACT_DAYS: "SUBSTRACT_DAYS" = "SUBSTRACT_DAYS";
export const SET_TYPES: "SET_TYPES" = "SET_TYPES";
export const SET_EMPOLYEES: "SET_EMPOLYEES" = "SET_EMPOLYEES";
export const SET_CALLS: "SET_CALLS" = "SET_CALLS";
export const SET_SOURCES: "SET_SOURCES" = "SET_SOURCES";
export const SET_RATINGS: "SET_RATINGS" = "SET_RATINGS";
export const SET_ERRORS: "SET_ERRORS" = "SET_ERRORS";

interface IAddDays {
    readonly type: typeof ADD_DAYS;
}

interface ISubstractDays {
    readonly type: typeof SUBSTRACT_DAYS;
}

interface ISetTypes {
    readonly type: typeof SET_TYPES;
    readonly filter: string;
}

export type TFilterActions = IAddDays | ISubstractDays;