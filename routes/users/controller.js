const { User } = require('../../models');

module.exports = {
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
