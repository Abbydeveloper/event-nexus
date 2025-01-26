const event = require('../db/models/event');
const user = require('../db/models/user');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const createEvent = catchAsync(async (req, res, next) => {
    const body = req.body;
    const userId = req.user.id;
    const newEvent = await event.create({
        title: body.title,
        eventImage: body.eventImage,
        description: body.description,
        shortDesc: body.shortDesc,
        category: body.category,
        createdBy: userId,
    });

    return res.status(201).json({
        status: 'success',
        data: newEvent,
    });
});

const getAllProject = catchAsync(async (req, res, next) => {
    const userId = req.user.id;
    const result = await project.findAll({
        include: user,
        where: { createdBy: userId },
    });

    return res.json({
        status: 'success',
        data: result,
    });
});

const getProjectById = catchAsync(async (req, res, next) => {
    const projectId = req.params.id;
    const result = await project.findByPk(projectId, { include: user });
    if (!result) {
        return next(new AppError('Invalid project id', 400));
    }
    return res.json({
        status: 'success',
        data: result,
    });
});

const updateProject = catchAsync(async (req, res, next) => {
    const userId = req.user.id;
    const projectId = req.params.id;
    const body = req.body;

    const result = await project.findOne({
        where: { id: projectId, createdBy: userId },
    });

    if (!result) {
        return next(new AppError('Invalid project id', 400));
    }

    result.title = body.title;
    result.productImage = body.productImage;
    result.price = body.price;
    result.shortDescription = body.shortDescription;
    result.description = body.description;
    result.productUrl = body.productUrl;
    result.category = body.category;
    result.tags = body.tags;

    const updatedResult = await result.save();

    return res.json({
        status: 'success',
        data: updatedResult,
    });
});

const deleteProject = catchAsync(async (req, res, next) => {
    const userId = req.user.id;
    const projectId = req.params.id;
    const body = req.body;

    const result = await project.findOne({
        where: { id: projectId, createdBy: userId },
    });

    if (!result) {
        return next(new AppError('Invalid project id', 400));
    }

    await result.destroy();

    return res.json({
        status: 'success',
        message: 'Record deleted successfully',
    });
});

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};