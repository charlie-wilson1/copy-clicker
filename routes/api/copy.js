const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// require models
const Copy = require('../../models/Copy');
const Profile = require('../../models/Profile');

// require validator
const validatePostInput = require('../../validation/post');

// @route   GET api/copy/test
// @desc    Tests copy route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'copy works!' }));

// @route   GET api/copy/
// @desc    Get copy
// @access  Private
// TODO: protect this route
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Copy.find()
      .sort({ date: -1 })
      .then(copy => {
        if (copy.length === 0) {
          res.json({ nocopyfound: 'No copy found' });
        } else {
          res.json(copy);
        }
      })
      .catch(err => res.status(400).json({ nocopyfound: 'No copy found' }));
  }
);

// @route   GET api/copy/:id
// @desc    Get copy by id
// @access  Private
// TODO: protect this route
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Copy.findById(req.params.id)
      .then(copy => res.json(copy))
      .catch(err => res.status(400).json({ nocopyfound: 'No copy found' }));
  }
);

// @route   POST api/copy
// @desc    Post a copy route
// @access  Private
// TODO: finish this route
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //check validation
    if (!isValid) {
      // if any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route   DELETE api/copy/:id
// @desc    Delete copy by id
// @access  Private
// TODO: finish this route
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          //check for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'user not authorized' });
          }
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'no post found' }));
    });
  }
);

// @route   POST api/posts/like/:id
// @desc    Like post by id
// @access  Private
// TODO: finish this route
router.post(
  '/like/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'You have already liked this post' });
          }

          // Add user id to the likes array
          post.likes.unshift({ user: req.user.id });

          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'no post found' }));
    });
  }
);

// @route   POST api/posts/unlike/:id
// @desc    Like post by id
// @access  Private
// TODO: finish this route
router.post(
  '/unlike/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'You have not yet liked this post' });
          }

          //get the remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Add user id to the likes array
          post.likes.splice(removeIndex, 1);

          //save
          post.save().then(post => {
            res.json(post);
          });
        })
        .catch(err => res.status(404).json({ postnotfound: 'no post found' }));
    });
  }
);

module.exports = router;
