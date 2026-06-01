export enum SortBy {
    CREATEDAT = "createdAt",
    UPDATEDAT = "updatedAt",
}

export interface IBaseQueryString{
    page?:string;
    limit?:string;
    sort?: SortBy;
    asc?:boolean;
}