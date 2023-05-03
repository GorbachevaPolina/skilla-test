import { TResponse } from "../types/server-response";

export const ADD_DAYS: "ADD_DAYS" = "ADD_DAYS";
export const SUBSTRACT_DAYS: "SUBSTRACT_DAYS" = "SUBSTRACT_DAYS";
export const SET_DATA: "SET_DATA" = "SET_DATA";
export const SET_TYPES: "SET_TYPES" = "SET_TYPES";

interface IAddDays {
    readonly type: typeof ADD_DAYS;
}

interface ISubstractDays {
    readonly type: typeof SUBSTRACT_DAYS;
}

interface ISetData {
    readonly type: typeof SET_DATA;
    readonly data: TResponse
}

interface ISetTypes {
    readonly type: typeof SET_TYPES;
    readonly filter: "" | "1" | "0";
}

export type TFilterActions = IAddDays | ISubstractDays | ISetData | ISetTypes;