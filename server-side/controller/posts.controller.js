const db = require('../models')
const Post = db.posts
const Users = db.users

exports.createPost = async (req, res, next) => {
  const { title, content, userId, status } = req.body
  const post = {
    title: title,
    content: content,
    userId: userId,
    status: status
  }

  Post.create(post)
    .then(data => res.json({ post: data }))
    .catch(() => next(new Error('post not created')))
}

exports.getAllPosts = async (req, res, next) => {
  Post.findAll({
    include: {
      model: Users,
      attributes: ['username']
    },
    where: { status: 'published' },
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
    .then(posts => res.json({ posts: posts }))
    .catch(() => next(new Error('posts not exist')))
}

exports.getAlldrafts = async (req, res, next) => {
  Post.findAll({
    where: { userId: req.query.userId, status: 'drafted' },
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
    .then(drafts => res.json({ drafts: drafts }))
    .catch(() => next(new Error('Drafts may not exit.')))
}

exports.getPostById = async (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
    .then(post => res.json({ post: post }))
    .catch(() => next(new Error('post not exist')))
}

exports.editPost = async (req, res, next) => {
  let { title: updatedTitle, content: updatedContent } = req.body
  console.log(req.params)
  Post.update({ title: updatedTitle, content: updatedContent }, { where: { id: req.params.id } })
    .then(() => res.json({ success: 'post updated' }))
    .catch(() => next(new Error('Not updated')))
}

exports.publishDraft = async (req, res, next) => {
  try {
    Post.update({ status: 'published' }, { where: { id: req.params.id } })
      .then(() => res.json({ success: 'post published' }))
      .catch(() => next(new Error('Draft may not exit.')))
  } catch (err) {
    next(err)
  }
}

exports.deletePost = async (req, res, next) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => res.json({ success: 'post deleted' }))
    .catch(() => next(new Error('post does not exit')))
}
