const Diary = require('../models/Diary')


async function index(req, res) {
    try {
        const snacks = await Diary.getAll();
        res.status(200).json(snacks);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
};

async function show_date(req, res) {
    try {
        const {day, month, year} = req.params;
        const formattedDate = `${year}-${month}-${day}`;
        const entry = await Diary.getByDate(formattedDate);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
};

async function show_username(req, res) {
    try {
        const { username } = req.params;
        const entry = await Diary.getByUsername(username);
        res.status(200).json(entry);
    } catch (error) {
        res.status(404).json({'error': error.message})
    }
}

async function show_category(req, res) {
    try {
        const category = req.params.category.toUpperCase()
        const entry = await Diary.getByCategory(category);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
};

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Diary.getOneById(id);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
};

async function create(req, res) {
    try {
        const data = req.body;
        const newEntry = await Diary.create(data);
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ "error": err.message })
    }
};


async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const entry = await Diary.getOneById(id);
        const result = await entry.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
};

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Diary.getOneById(id);
        const result = await entry.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
};


module.exports = {
    index, show_date, show_category, show_username, show, create, update, destroy
};