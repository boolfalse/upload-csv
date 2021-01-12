'use strict';

const faker = require('faker');
const path = require('path');
const fs = require('fs');

(async () => {
    const logFilePath = path.join(__dirname, './public/custom-csv.csv');

    let i = 0;
    const chanceToGetFalse = 10; // natural number between 1-100 (%)
    let first_name_random = 0;
    let last_name_random = 0;
    let email_random = 0;
    let phone_random = 0;
    while(i < 100) // initial CSV file rows count
    {
        first_name_random = Math.floor(Math.random() * 100) + 1;
        last_name_random = Math.floor(Math.random() * 100) + 1;
        email_random = Math.floor(Math.random() * 100) + 1;
        phone_random = Math.floor(Math.random() * 100) + 1;

        let row = {
            first_name: (first_name_random < chanceToGetFalse) ? '' : faker.name.firstName(),
            last_name: (last_name_random < chanceToGetFalse) ? '' : faker.name.lastName(),
            email: (email_random < chanceToGetFalse) ? 'wrong-email' : faker.internet.email(),
            phone: (phone_random < chanceToGetFalse) ? 'wrong-number' : faker.phone.phoneNumberFormat(),
        }
        await fs.appendFileSync(logFilePath, `${row.first_name},${row.last_name},${row.email},${row.phone}\n`);
        i++;
    }
})();



