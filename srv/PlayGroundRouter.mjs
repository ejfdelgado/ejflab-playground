import { commonHeaders, handleErrorsDecorator } from "@ejfdelgado/ejflab-back/srv/Network.mjs";
import * as multer from 'multer';
import { PostgresSrv } from "@ejfdelgado/ejflab-back/srv/PostgresSrv.mjs";

const upload = multer.default();

export class PlayGroundRouter {
    static configure(app) {
        app.get('/srv/playground/ping', [commonHeaders, handleErrorsDecorator(PostgresSrv.test)]);
    }
}