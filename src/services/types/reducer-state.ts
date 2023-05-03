import { TResponse } from "./server-response";

export type TTableState = {
    days: number;
    data: TResponse | null;
    in_out: "" | "1" | "0"
}