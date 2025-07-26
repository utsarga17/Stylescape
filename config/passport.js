// config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  // LOCAL STRATEGY
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      
      User.findOne({ username: username })
        .then(user => {
          if (!user) return done(null, false, { message: 'No user found' });

          
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) return done(null, user);
            else return done(null, false, { message: 'Password incorrect' });
          });
        })
        .catch(err => console.log(err));
    })
  );

  // GITHUB STRATEGY
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await User.findOne({ githubId: profile.id });

          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = new User({
            githubId: profile.id,
            username: profile.username
          });

          await newUser.save();
          return done(null, newUser);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  // Serialize/Deserialize
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); 
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

};
