import { defineEventHandler } from 'h3';
import { pool } from '../config/db';

export default defineEventHandler(async (event) => {
  try {
    const query = 'SELECT * FROM location;';
    const result = await pool.query(query); // プールを使用してクエリを実行
    return result.rows;
  } catch (error) {
    console.error('DBエラー：', error);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});