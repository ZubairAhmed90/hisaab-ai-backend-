module.exports = {
  apps: [
    {
      name: 'hisaabai-backend',
      script: 'server.js',

      // Single instance — shared cPanel hosting
      instances: 1,
      exec_mode: 'fork',

      // Fix: prevents WebAssembly OOM on CloudLinux (Node 20)
      node_args: '--disable-wasm-trap-handler',

      // Memory guard — restart if process exceeds 400 MB
      max_memory_restart: '400M',

      // Restart behaviour
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      autorestart: true,

      // Logs — stored in ./logs/
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,

      // Env passed to the process
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
