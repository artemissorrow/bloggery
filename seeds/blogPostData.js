const { BlogPost } = require('../models');

const blogpostdata = [
  {
    title: 'Blog Post',
    author_id: 1,
    post_body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia placerat arcu ac dictum. Nam non facilisis nulla. Fusce egestas lorem et velit commodo scelerisque. Aenean porttitor maximus neque quis dictum. Sed imperdiet neque hendrerit eleifend sodales. Integer sed mollis lacus. Morbi tempor mattis nibh eget pharetra. Curabitur vestibulum convallis metus in semper. Proin nec diam tristique, ornare diam eu, laoreet tellus. Nunc nec porttitor felis, a convallis diam. Fusce sit amet suscipit magna, at pretium tellus. Nunc tempor ex enim, in finibus ligula laoreet nec. Aliquam quis pulvinar dolor, tincidunt eleifend mauris. Aenean quis malesuada nunc. Proin tincidunt semper ante nec pharetra. Etiam a feugiat odio.',
  },
];

const seedBlog = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedBlog;
