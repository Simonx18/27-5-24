const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Author = require('../models/author');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingAuthor = await Author.findOne({ googleId: profile.id });

      if (existingAuthor) {
        return done(null, existingAuthor);
      }

      const newAuthor = await Author.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      });

      done(null, newAuthor);
    }
  )
);

passport.serializeUser((author, done) => {
  done(null, author.id);
});

passport.deserializeUser(async (id, done) => {
  const author = await Author.findById(id);
  done(null, author);
});