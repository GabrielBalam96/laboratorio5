const httpFunction = require('./index');
const context = require('../testing/Context');

test('Http trigger', async () => {
    const request = {
        query: { name: 'gabrielbalam'}

    };
    var interations = 1000000;
    console.time('Function #1');

    for(var i = 0; i < interations; i++) {
         functions(Context, request);
    }
    // await httpFunction(context,request);
    console.timeEnd('Function #1');
    expect(context.res.body).toEqual('Welcome, gabrielbalam');
    expect(context.log.mock.calls.length).toBe(1000000);
});
