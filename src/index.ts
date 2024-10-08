import { Hono } from 'hono'
import works from "./works"

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.route('/works', works)

export default app