function help() {
    console.log(`
        These are some myCLI commands used in various situations
            
            1. node main.js tree <path>
            2. node main.js organize <path>
            3. node main.js help
    `);
}
module.exports = {
    // key value pair ,it help to export more then one function, object etc..
    help:help,
}
