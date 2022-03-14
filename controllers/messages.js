const Message = require("./../models/Message");

const getAll = (req, res) => {
    let response = {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: [
                { user: "John", message: "Hello" },
                { user: "Jane", message: "Hi!" },
            ],
        },
    };
    res.json(response);
};

const get = (req, res) => {
    let id = req.params.id;
    let response = {
        status: "success",
        message: `GETTING message ${id}`,
        data: {
            message: { user: "John", message: "Hello" },
        },
    };
    res.json(response);
};

const create = async (req, res) => {
    let message = req.body.message;
    let user = req.body.user;

    const msg = new Message({
        user: user,
        message: message,
    });

    await msg.save();

    let response = {
        status: "success",
        message: `CREATING message ${message}`,
        data: {
            message: { user: user, message: message },
        },
    };
    res.json(response);
};

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.create = create;
