const User = require('./User');
const Blogpost = require('./Blogpost');

User.hasMany(Blogpost, {
  foreignKey: 'author_id',
});

Blogpost.belongsTo(User, {
  foreignKey: 'author_id',
});

module.exports = { User, Blogpost };
