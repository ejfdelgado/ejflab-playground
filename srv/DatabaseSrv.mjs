import { PostgresSrv } from "@ejfdelgado/ejflab-back/srv/PostgresSrv.mjs";

export class DatabaseSrv {
    static async testSQL(req, res, next) {
        const results = await PostgresSrv.executeText("SELECT NOW() as ping", {});
        const row = results.rows[0];

        const result = {
            status: "ok",
            row
        };
        res.status(200).send(result);
    }

    static async testFile(req, res, next) {
        const results = await PostgresSrv.executeFile("srv/sql/script1.sql", {});
        const row = results.rows[0];

        const result = {
            status: "ok",
            row
        };
        res.status(200).send(result);
    }
}