const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController')
const BookController = require("../controller/bookController")
const ReviewController =require("../controller/reviewController")
const authenticate1 = require('../middlware/auth')

router.post("/register" , UserController.createUserData)

router.post("/login", UserController.loginUser)
 
router.post("/books", BookController.createBook)
router.get("/books",BookController.getBook)
router.get("/books/:bookId", BookController.getBookById)
router.put("/PUT/books/:bookId", authenticate1.authenticate,BookController.updateBooks)
router.delete("/books/:bookId", authenticate1.authenticate,BookController.deleteById)
 
router.post("/books/:bookId/review", ReviewController.createReview)
router.put("/books/:bookId/review/:reviewId", ReviewController.UpdateReview)
router.delete("/books/:bookId/review/:reviewId", ReviewController.deleteReview )



module.exports = router;
