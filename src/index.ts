import { Hono } from 'hono'
import works from "./works";
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use(prettyJSON())

app.get('/', (c) => {
  return c.text('Hello Hono')
})

app.route('/works', works)

export default app