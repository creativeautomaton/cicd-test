module.exports = ({ env }) => ({
  connection: {
    client: ${DATABASE_CLIENT},
    connection: {
      host: env('DATABASE_HOST', ${DATABASE_HOST}),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', ${DATABASE_NAME}),
      user: env('DATABASE_USERNAME', ${DATABASE_USERNAME}),
      password: env('DATABASE_PASSWORD', ${DATABASE_PASSWORD}),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});