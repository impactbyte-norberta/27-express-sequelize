const { User } = require('../../models');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const results = await User.findAll();

            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    getUserProfile: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await User.findByPk(id);

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    userRegistration: async (req, res) => {
        const { fullName, email, password } = req.body;

        try {
            const result = await User.create({
                fullName,
                email,
                password,
            });

            res.send({
                message: `Registration successfull`,
                result: result,
            });
        } catch (error) {
            res.send(error);
        }
    },
};
