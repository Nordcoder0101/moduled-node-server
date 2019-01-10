const fs = require('fs')
module.exports = (req, res) => {
  let path = 'views/'
  function renderPage(htmlpath) {

    fs.readFile(htmlpath, 'utf8', (errors, contents) =>{
      res.write(contents)
      res.end()
    })
  }
  res.writeHead(200, { 'Content-type': `text/html` })
  console.log('Request', req.url)
  if (req.url === '/'){
    renderPage(`${path}index.html`)
  }
  else if (req.url === '/hello'){
    renderPage(`${path}hello.html`)
  }
  else {
    res.end("File not found!")
  }
}