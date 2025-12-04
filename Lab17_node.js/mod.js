// mod.js

const helper = function (data) {
    return `${data} is logged in!`;
};

const userid = (id) => {
    return `${id}`;
};

const useremail = (email) => {
    return email;
};

module.exports = { helper, userid, useremail };
