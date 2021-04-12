function generatehtml(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron text-center">
            <h1>My Team</h1>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h1>Name: ${ data.name }</h1>
                        <h2>${ data.role }</h2>
                        <h3>Id: ${ data.id }</h3>
                        <h4>Email: <a href="mailto:${ data.email }">${ data.email }</a></h4>
                        <h5>Office Number: <a href="tel:${ data.officeNumber }">${ data.officeNumber }</a></h5>
                        </div>
                    </div>
                </div>

    `
}

module.exports = generatehtml;