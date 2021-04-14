const router = require('express').Router();
const { BlogPost, Comment } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findAll();

    const blogpost = dbBlogData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/blogpost/:id', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'author_id',
            'comment_body',
            'post_id'
          ],
        },
      ],
    });

    const blogpost = dbBlogData.get({ plain: true });
    res.render('blogpost', { blogpost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
