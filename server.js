const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request made', req);
    console.log('request made', req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="styleseet" href="#Home"></head>');
    res.write('<p>hello from server</p>');
    res.write('<p>hello again from server</p>');
    res.end();
});

const port = 3000;

server.listen(port, 'localhost', () => {
    console.log(`listening for requests on port ${port}`);
});