function addingIntern(data){
    return `
        <h1>${ data.name }</h1>
        <h2>${ data.role }</h2>
        <h3>${ data.id }</h3>
        <h4>${ data.email }</h4>
        <h5>${ data.school }</h5>
    `
}

module.exports = addingIntern;