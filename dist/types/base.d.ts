export declare enum SortBy {
    CREATEDAT = "createdAt",
    UPDATEDAT = "updatedAt"
}
export interface IBaseQueryString {
    page?: string;
    limit?: string;
    sort?: SortBy;
    asc?: boolean;
}
export interface ISocketAcknowledgement<T = any> {
    success: boolean;
    data?: T;
    message?: string;
}
export type SocketAcknowledgementCallback = (value: ISocketAcknowledgement) => void;
//# sourceMappingURL=base.d.ts.map