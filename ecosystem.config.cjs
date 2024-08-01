module.exports = {
  apps: [
    {
      name: "nuxt-template",
      script: "./.output/server/index.mjs",
      args: "start",
      watch: true,
      ignore_watch: ["node_modules", "public", "logs"],
      exec_mode: "cluster",
      instances: "1",
      autorestart: true,
      max_memory_restart: "1G",
      error_file: './logs/app-err.log',
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      min_uptime: "60s",
      env: {
        NODE_ENV: "development",
        PORT: "8888",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "60001",
      },
      env_test: {
        NODE_ENV: "test",
      }
    }
  ]
}