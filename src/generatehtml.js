function generatehtml(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${ data.name }</h1>
        <h2>${ data.role }</h2>
        <h3>${ data.id }</h3>
        <h4>${ data.email }</h4>
        <h5>${ data.officeNumber }</h5>
    `
}

module.exports = generatehtml;