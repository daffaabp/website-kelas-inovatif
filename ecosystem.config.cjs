module.exports = {
    apps: [{
        name: "free.kelasinovatif.com",
        script: "bun",
        args: "run start",
        cwd: "/home/kelasinovatif-free/htdocs/free.kelasinovatif.com",
        instances: 1,
        exec_mode: "fork",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
        env: {
            NODE_ENV: "production",
            PORT: 3002,
        },
        error_file: "./logs/pm2-error.log",
        out_file: "./logs/pm2-out.log",
        log_file: "./logs/pm2-combined.log",
        log_date_format: "YYYY-MM-DD HH:mm:ss Z",
        time: true,
        merge_logs: true,
        min_uptime: "10s",
        max_restarts: 10,
        restart_delay: 4000,
        kill_timeout: 5000,
        listen_timeout: 10000,
    }]
};
