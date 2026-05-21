import CustomError from "./CustomError.js";
const notFoundErrorHandler = (req, res, next) => {
    return next(new CustomError(404, `route ${req.originalUrl} not found!`));
};
export default notFoundErrorHandler;
//# sourceMappingURL=notFoundHandler.js.map