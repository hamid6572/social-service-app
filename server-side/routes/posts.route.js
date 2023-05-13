const express = require('express')
const router = express.Router()

const authorize = require('../middleware/auth')
const postsController = require('../controller/posts.controller')
const { validatePost } = require('../validator/post.validator.js')

router.post('/', authorize, validatePost, postsController.createPost)

router.get('/all', authorize, postsController.getAllPosts)
router.get('/drafts', authorize, postsController.getAlldrafts)
router.get('/:id', authorize, postsController.getPostById)

router.put('/:id', authorize, validatePost, postsController.editPost)
router.put('/:id/status', authorize, postsController.publishDraft)

router.delete('/:id', authorize, postsController.deletePost)

module.exports = router
