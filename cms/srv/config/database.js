module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'db_strapi'),
        username: env('DATABASE_USERNAME', 'my_user'),
        password: env('DATABASE_PASSWORD', 'my_root_password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
