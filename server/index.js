import http from 'node:http';
import pg from 'pg';

// Dedicated backend only. Never expose DATABASE_URL to the Vite frontend.
const port = Number(process.env.PORT || 3001);
const pool = process.env.DATABASE_URL ? new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: true }, max: 2, connectionTimeoutMillis: 4000 }) : null;
const send = (res, code, payload) => { res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }); res.end(JSON.stringify(payload)); };
const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/health') return send(res, 200, { service: 'atelier-club-api', status: 'up', checkout: 'disabled' });
  if (req.method === 'GET' && req.url === '/health/database') {
    if (!pool) return send(res, 503, { database: 'not_configured' });
    try { const result = await pool.query("SELECT to_regclass('public.atelier_orders') IS NOT NULL AS ready"); return send(res, result.rows[0].ready ? 200 : 503, { database: result.rows[0].ready ? 'ready' : 'schema_missing' }); }
    catch { return send(res, 503, { database: 'unavailable' }); }
  }
  if (req.url?.startsWith('/api/checkout')) return send(res, 503, { error: 'checkout_not_enabled', message: 'Aguardando preços, frete, impostos e validação do Stripe em testes.' });
  return send(res, 404, { error: 'not_found' });
});
server.listen(port, '0.0.0.0');
process.on('SIGTERM', () => server.close(() => pool?.end()));
