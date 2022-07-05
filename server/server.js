const app = require('./app');
const { mongoConnect } = require("./services/mongo");

async function startServer() {
  await mongoConnect();

  app.listen(4000, () => {
		console.log("Server is listening on port 4000...");
	});
}

startServer();