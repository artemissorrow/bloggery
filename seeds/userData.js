const { User } = require('../models');

const userdata = [
  {
    username: 'UserName',
    email: 'test@test.com',
    password: 'Password123'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;