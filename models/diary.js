const db = require("../database/connect");
class Diary {
    constructor({ id, title, content, timestamp, category, user_id }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.timestamp = timestamp;
        this.category = category;
        this.user_id = user_id;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM DiaryEntry ORDER BY id DESC;");
        if (response.rows.length === 0) {
            throw new Error("No entry available.")
        }
        return response.rows.map(g => new Diary(g));
    }
    static async getByDate(date) {
        const response = await db.query("SELECT * FROM DiaryEntry WHERE DATE(timestamp) = $1;",[date]);

        if (response.rows.length === 0) {
            throw new Error("No entries found for the given date.");
        }
        return response.rows.map(entry => new Diary(entry));
    }
    static async getByCategory(category) {
        const response = await db.query("SELECT * FROM DiaryEntry WHERE category = $1",[category]);

        if (response.rows.length === 0) {
            throw new Error("No entries found for the given category.");
        }
        return response.rows.map(entry => new Diary(entry));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM DiaryEntry WHERE id = $1;",[id]);

        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Diary(response.rows[0]);
    }

    static async create(data) {
        const {title, content, category, user_id } = data;
        const response = await db.query('INSERT INTO DiaryEntry (title, content, category, user_id) VALUES ($1, $2, $3, $4) RETURNING *;',[title, content, category, user_id]);
        const entryId = response.rows[0].id;
        const newEntry = await Diary.getOneById(entryId);
        return newEntry;
    }

    async update(data) {
        const response = await db.query("UPDATE DiaryEntry SET content = $1 WHERE id = $2 RETURNING *;",
            [data.content, this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update content.")
        }
        return new Diary(response.rows[0]);
    }

    async destroy() {
        const response = await db.query('DELETE FROM DiaryEntry WHERE id = $1 RETURNING *;', [this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to delete entry.")
        }
        return new Diary(response.rows[0]);
    }

}

module.exports = Diary;