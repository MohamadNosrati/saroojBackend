import type { NextFunction, Request, Response } from "express";
export declare const createBlog: (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const getAllBlogs: (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const getAllSlugs: (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const findBlog: (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const findBlogBySlug: (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const deleteBlog: (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const updateBlog: (req: Request, res: Response, next: NextFunction) => Promise<any>;
//# sourceMappingURL=blog.d.ts.map