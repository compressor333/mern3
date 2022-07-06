const getGoals = (req, res) => {
    console.log(req.body);
    res.status(200).json({'message': 'wiev message'})
}

const createGoals = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ('input something')
    }
    res.status(200).json({message: 'create message'})
}

const updateGoals = (req, res) => {
    res.status(200).json({message: `update message ${req.params.id}`})
}

const deleteGoals = (req, res) => {
    res.status(200).json({message: `delete message ${req.params.id}`})
}

module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals,
}