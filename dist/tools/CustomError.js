class CustomError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
export default CustomError;
//# sourceMappingURL=CustomError.js.map