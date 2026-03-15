import express from "express";
import { createServer } from "http";
import path from "path";

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Use process.cwd() to avoid __dirname and import.meta.url issues during esbuild/Vercel
  const staticPath = path.resolve(process.cwd(), process.env.NODE_ENV === "production" ? "dist/public" : "dist/public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
