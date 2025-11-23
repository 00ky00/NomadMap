import { Pool } from 'pg';

const pool = new Pool({
    user: 'koutayoshizawa',
    host: 'localhost',
    database: 'nomadmapdb',
    port: 5432
});
export { pool };


// const pool = mysql.createPool({
//   host: 'mysql80.az-jam.sakura.ne.jp',
//   user: 'az-jam_nomadmapdb',
//   password: 'Zeig8zgh4x',
//   database: 'az-jam_nomadmapdb',
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// export { pool };
