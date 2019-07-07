import { parse } from "qs";

export const parseQuery = (query: string) => parse(query, { ignoreQueryPrefix: true });
