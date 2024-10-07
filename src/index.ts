import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use(prettyJSON())

app.get('/', (c) => {
  return c.text('Hello Hono')
})

export default app