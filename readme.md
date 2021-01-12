
## Upload CSV

- Upload and validate CSV content.



#### Requirements

- NPM with NodeJS (or Nginx server) installed
- PostgreSQL installed



#### Demo Test

- Run following commands
```
git clone https://github.com/boolfalse/upload-csv.git
cd upload-csv/
npm i
```

- Create empty Postgres DB

- Create .env file inside of your project root folder, and define required variables as described in ".env.example"

- Run migrations
```
sequelize db:migrate
```

- Run this command to generate CSV sample file
```
node init.js
```

- Run the app (dev)
```
npm start
```

