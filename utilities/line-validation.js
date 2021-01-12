'use strict';

const validator = require('validator');

module.exports = (line) => {
    let data = {};
    let is_valid = true;
    let wrong_field = '';
    line.split(',').forEach((piece, index) => {
        switch (index) {
            case 0:
                if (validator.isLength(piece, {min: 1, max: 100})) {
                    data.first_name = piece;
                } else {
                    is_valid = false;
                    wrong_field = 'first_name';
                    return;
                }
                break;
            case 1:
                if (validator.isLength(piece, {min: 1, max: 100})) {
                    data.last_name = piece;
                } else {
                    is_valid = false;
                    wrong_field = 'last_name';
                    return;
                }
                break;
            case 2:
                if (validator.isEmail(piece)) {
                    data.email = piece;
                } else {
                    is_valid = false;
                    wrong_field = 'email';
                    return;
                }
                break;
            case 3:
                if (validator.isMobilePhone(piece)) {
                    data.phone = piece;
                } else {
                    is_valid = false;
                    wrong_field = 'phone';
                    return;
                }
                break;
            default:
                is_valid = false;
                data = {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                };
        }
    });

    if (is_valid) {
        return {
            success: true,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
        };
    } else {
        return {
            success: false,
            err_message: `Wrong field: ${wrong_field}`,
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
        };
    }
};
