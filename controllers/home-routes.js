const router = require('express').Router()
const { BlogPost, Comment, User } = require('../models')

router.get('/', async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })

    const blogposts = blogData.map(blogpost => blogpost.get({ plain: true }))

    res.render('homepage', { blogposts })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['author_id', 'comment_body']
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    const post = blogData.get({ plain: true })
    res.render('blogpost', { post })
  } catch (err) {}
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }
  res.render('login')
})

module.exports = router
