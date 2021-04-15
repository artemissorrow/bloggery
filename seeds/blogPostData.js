const { BlogPost } = require('../models');

const blogpostdata = [
  {
    title: 'Blog Post',
    author_id: 1,
    post_body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia placerat arcu ac dictum. Nam non facilisis nulla. Fusce egestas lorem et velit commodo scelerisque.',
  },
];

const seedBlog = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedBlog;
