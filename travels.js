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
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    h1 {
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
    }
    h2 {
        margin: 1rem 0;
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
        font-style: italic;
        color: steelblue;
    }
    p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }
    img {
        width: 100%;
    }
    #menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        background-color: steelblue;
        height: 4rem;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 1rem;
        padding: 0.5rem;
        border: 1px solid white;
        border-radius: 5px;
        transition: 0.3s;
    }
    a:hover {
        background-color: white;
        color: darkblue;
    }
        </style>
        <body>
            <header>
            <h1>Rafa's travel</h1>
            <h2>${h2}</h2>
            <p>${descripcion}</p>
            <p>${precio}</p>
            <img src="${img}">
            </header>
        </body>
        </html>`
  );
  response.end();
});

server.listen(4000, () => {
  console.log(`working at http://localhost:${port}`);
});
