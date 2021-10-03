module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API. This message s recieved via a Azure Functions API."
    });
};