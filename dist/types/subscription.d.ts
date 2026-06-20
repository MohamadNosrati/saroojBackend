export interface IKeys {
    p256dh: string;
    auth: string;
}
export interface IPushSubscription {
    endpoint: string;
    expirationTime: number | null;
    keys: IKeys;
}
export interface ISubscription extends IPushSubscription {
    deviceInfo?: {
        userAgent: string;
        platform: string;
        browser: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=subscription.d.ts.map