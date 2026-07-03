import app from './hono';

const port = Number(process.env.PORT || 8787);

app.listen({ port }).then(() => {
  console.log(`[backend] Listening on http://localhost:${port}`);
}).catch((err) => {
  console.error('[backend] Failed to start server:', err);
  process.exit(1);
});
