import chai from 'chai';
import chaiDom from 'chai-dom';

chai.use(chaiDom);

// find the tests and load them
const context = require.context('./src', true, /\.spec\.tsx?$/);
context.keys().map(context);
