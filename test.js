// find the tests and load them
const context = require.context('./src', true, /\.spec\.tsx?$/);
context.keys().map(context);
