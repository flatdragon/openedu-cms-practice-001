require('http').Server((req, res) => {
  const author = 'itmo282167'
  res.writeHead(200, {
    'X-Author': author,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
  })
  res.end(author)
}).listen(process.env.PORT)
