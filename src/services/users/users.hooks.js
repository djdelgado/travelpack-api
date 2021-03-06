const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { hashPassword } = require('feathers-authentication-local').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');
// const postmessage = require('../../hooks/postmessage.js');

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id',
  }),
];

module.exports = {
  before: {
    all: [],
    find: [],
    // find: [authenticate('jwt')],
    get: [],
    // get: [authenticate('jwt')],
    create: [hashPassword({ passwordField: 'password' })],
    update: [...restrict],
    patch: [...restrict],
    remove: [...restrict],
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password'),
      ),
    ],
    find: [
      // commonHooks.when(
      //   hook => console.log(hook),
      // ),
    ],
    get: [],
    create: [
      commonHooks.when(
        hook => console.log(hook.app.passport.createJWT),
      ),
    ],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
