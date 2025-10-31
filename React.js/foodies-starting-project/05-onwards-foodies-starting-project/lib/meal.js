import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getAllMeals() {
    const stmt = db.prepare('SELECT * FROM meals');
    return stmt.all(); //all used to get all the data .... but get() used to get single data
}