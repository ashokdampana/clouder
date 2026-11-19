
import app from "./app";

export default {
    fetch: app.fetch,
    port: Bun.env.SERVER_PORT,
}
