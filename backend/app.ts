import { Hono } from "hono";
import type { Context } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use( logger());
app.use( cors({
    origin: Bun.env.CLIENT_URL,
}));

app.get('/', (c) => {
    return c.json({ message: "GET /api/health --- POST /api/data" });
})

app.get('/api/health', (c) => {
    return c.json({message: "Server is running ..."});
})

app.post('/api/data', async (c: Context) => {
    const { name } = await c.req.json();
    return c.json({message: "Input data", name});
})

export default app;
