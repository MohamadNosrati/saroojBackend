export interface ICommentSchema {
  fullName:string;
  text:string;
  email:string;
  createdAt:Date;
  updatedAt:Date;
  isActive:boolean;
  type:"persian" | "english";
}