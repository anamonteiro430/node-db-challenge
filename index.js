const server = require('./api/server');

//define port
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
	res.send(`
    <h2>SPRINT</h>
  `);
});

server.listen(port, () =>
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
);
