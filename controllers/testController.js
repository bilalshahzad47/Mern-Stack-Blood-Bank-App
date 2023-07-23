const testController = (req, res) => {
    res.status(200).send({
        message: "Test User",
        success: true,
    })
}

module.exports = {testController};