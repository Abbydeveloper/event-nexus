const { 
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent, } = require('../controller/eventController');

const router = require('express').Router();

router.route('/events').post(createEvent);

router.route('/events').get(getAllEvents);

router.route(`/event/:${id}`).get(getEventById);

router.route(`/event/:${id}`).patch(updateEvent);

router.route(`/event/:${id}`).delete(deleteEvent);

module.exports = router;