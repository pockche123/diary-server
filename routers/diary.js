const { Router } = require('express');

const diaryController = require('../controllers/diary');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);//list entries ordered by recency
diaryRouter.get("/date/:day/:month/:year", diaryController.show_date);//show entry based on date
diaryRouter.get("/category/:category", diaryController.show_category);// show entries based on category
diaryRouter.get('/user/:username', diaryController.show_username)
diaryRouter.get("/:id", diaryController.show)//find by id
diaryRouter.post("/", diaryController.create);//crete new entry
diaryRouter.patch("/:id",diaryController.update);//update text of an entry using its id
diaryRouter.delete("/:id", diaryController.destroy);//delete an entry using its id

module.exports = diaryRouter;