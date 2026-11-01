// https://api.npoint.io/ed514e69c9cd441353cd

fetch ('https://api.npoint.io/ed514e69c9cd441353cd')
    .then((Response) => Response.json())
    .then(json =>{
        console.log(json);
    })