function addingIntern(data){
    return `
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h1>Name: ${ data.name }</h1>
                            <h2>${ data.role }</h2>
                            <h3>Id: ${ data.id }</h3>
                            <h4>Email: <a href="mailto:${ data.email }">${ data.email }</a></h4>
                            <h5>School: ${ data.school }</h5>
                        </div>
                    </div>
                </div>
    `
}

module.exports = addingIntern;