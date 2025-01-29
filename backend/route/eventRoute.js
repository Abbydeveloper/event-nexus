const { 
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent, } = require('../controller/eventController');


const authentication = require('../controller/authController');

const restrictTo = require('../controller/authController');

const router = require('express').Router();

router.route('/')
  .post(authentication, restrictTo('0'), createEvent)
  .get(authentication, restrictTo('1'), getAllEvents);

router.route('/:id')
  .get(authentication, restrictTo('1'), getEventById)
  .patch(authentication, restrictTo('1'), updateEvent)
  .delete(authentication, restrictTo('1'), deleteEvent);

module.exports = router;