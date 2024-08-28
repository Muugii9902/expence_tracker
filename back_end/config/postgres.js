const postgres = require("postgres")

const sql = postgres({
    host: 'ep-mute-fog-a57rimof.us-east-2.aws.neon.tech',
    database: 'expense_db',
    username: 'expense_db_owner',
    password: 'BHwm2DzOFy4L',
    port: 5432,
    ssl: 'require',
    connection: {
      options: `project=ep-mute-fog-a57rimof`,
    },
  });

  module.exports=sql