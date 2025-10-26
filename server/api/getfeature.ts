import { defineEventHandler } from 'h3'
import { pool } from '../config/db'

export default defineEventHandler(async (event) => {
  try {
    const [rows] = await pool.query('SELECT * FROM location')
    console.log(rows)
    return rows
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}) // この閉じ括弧が不足していた可能性があります