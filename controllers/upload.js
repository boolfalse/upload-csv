
const fs = require('fs');
const path = require('path');
const isValid = require('./../utilities/line-validation');

const {
    Success,
    Fail,
} = require('./../models');

module.exports = {
    csvUpload: async (req, res) => {
        const readFilePath = path.join(__dirname, './../uploads/' + req.upload_csv + '.csv');
        fs.readFile(readFilePath, 'utf8', async (err, fileText) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: "Something went wrong!",
                });
            } else {
                let data = {};
                fileText.toString().split("\n").map(async (line, index, arr) => {
                    if (index > 0) {
                        data = isValid(line);
                        if(data.success) {
                            await Success.create({
                                line: index + 1,
                                first_name: data.first_name,
                                last_name: data.last_name,
                                email: data.email,
                                phone: data.phone,
                            });
                        } else {
                            await Fail.create({
                                line: index + 1,
                                first_name: data.first_name,
                                last_name: data.last_name,
                                email: data.email,
                                phone: data.phone,
                                err_message: data.err_message,
                            });
                        }
                    }
                });

                const successCount = await Success.count();
                const failCount = await Fail.count();

                return res.status(200).json({
                    success: true,
                    message: "Uploaded CSV file scanned successfully.",
                    success_count: successCount,
                    fail_count: failCount,
                });
            }
        });
    },
};
