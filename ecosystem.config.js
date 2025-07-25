// PM2 configuration for Node.js hosting
// For VPS or dedicated server deployment

module.exports = {
  apps: [
    {
      name: 'montana-carpenter',
      script: 'server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_TELEMETRY_DISABLED: 1
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      // Logging
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Auto restart on crashes
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      
      // Graceful reload
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Performance
      node_args: '--max-old-space-size=1024',
      
      // Health monitoring
      min_uptime: '10s',
      max_restarts: 10,
      
      // Cron restart (optional - restart daily at 2 AM)
      cron_restart: '0 2 * * *',
      
      // Environment variables
      env_file: '.env.production'
    }
  ],
  
  // Deployment configuration
  deploy: {
    production: {
      user: 'deploy',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/montana-carpenter.git',
      path: '/var/www/montana-carpenter',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};