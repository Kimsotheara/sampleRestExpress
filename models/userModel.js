const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'staff_attn', // Change to your database name
    password: '123456',
    port: 5432,
});

const getAllUsers = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tb_user');
    return result.rows;
  } finally {
    client.release();
  }
};

const getUserById = async (userId) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tb_user WHERE user_seq = $1', [userId]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

const createUser = async (name) => {
  const client = await pool.connect();
  try {
    const result = await client.query('INSERT INTO tb_user (username) VALUES ($1) RETURNING *', [username]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

const updateUser = async (userId, name) => {
  const client = await pool.connect();
  try {
    const result = await client.query('UPDATE tb_user SET username = $1 WHERE user_seq = $2 RETURNING *', [username, user_seq]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

const deleteUser = async (userId) => {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM tb_user WHERE user_seq = $1 RETURNING *', [userId]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
