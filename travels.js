//require date from .json
const data = require("./travels.json");
//varible to start the server
const { createServer } = require("node:http");
console.log(data);
const port = 4000;
const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  let title = "";
  let h2 = "";
  let descripcion = "";
  let precio = "";
  let img = "";
  if (request.url === "/") {
    data.forEach((viaje) =>{
        if(viaje.id == ""){

            title = viaje.lugar;
            h2 = viaje.nombre;
            descripcion = viaje.descripcion;
            precio = viaje.precio;
            img = viaje.img;
        }
    })
  }
  response.write(
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <header>
            <h1>Rafa's travel</h1>
            <h2>${h2}</h2>
            <p>${descripcion}</p>
            <p>${precio}</p>
            </header>
        </body>
        </html>`
  );
  response.end();
});

server.listen(4000, () => {
  console.log(`working at http://localhost:${port}`);
});
