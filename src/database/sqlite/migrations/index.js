const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers_');

async function migrationsRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
    .then(db=>exec(schemas))
    .catch(error => console.error(error));

}

module.exports = migrationsRun;