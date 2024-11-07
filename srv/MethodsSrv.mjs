
export class MethodsSrv {
    static async testQueryParams(req, res, next) {
        const result = {
            status: "ok",
        };
        res.status(200).send(result);
    }
}