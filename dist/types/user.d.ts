export type TUserRole = "admin" | "superAdmin";
export interface IUser {
    id: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    userName: string;
    email: string;
    role: TUserRole;
    pictureId?: string;
}
//# sourceMappingURL=user.d.ts.map