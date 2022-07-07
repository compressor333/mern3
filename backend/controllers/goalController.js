const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({'message': 'wiev message'})
})

const createGoals = asyncHandler(async (req, res) => {
    console.log(req.body);
    if(!req.body.text) {
        
        res.status(400)
        throw new Error ('input something')
    }
    res.status(200).json({message: 'create message'})
})

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update message ${req.params.id}`})
})

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete message ${req.params.id}`})
})

module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals,
}