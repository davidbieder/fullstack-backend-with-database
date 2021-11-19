// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}
