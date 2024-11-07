import { commonHeaders, handleErrorsDecorator } from "@ejfdelgado/ejflab-back/srv/Network.mjs";
import * as multer from 'multer';
import { DatabaseSrv } from "./DatabaseSrv.mjs";
import { MethodsSrv } from "./MethodsSrv.mjs";

const upload = multer.default();

export class PlayGroundRouter {
    static configure(app) {
        // Methods
        app.get('/srv/playground/test_query_params', [commonHeaders, handleErrorsDecorator(MethodsSrv.testQueryParams)]);
        // Data base
        app.get('/srv/playground/test_sql', [commonHeaders, handleErrorsDecorator(DatabaseSrv.testSQL)]);
        app.get('/srv/playground/test_file', [commonHeaders, handleErrorsDecorator(DatabaseSrv.testFile)]);
    }
}