
function cargar(){

    console.log('fufa');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/pokemon.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="${item.nombre}()" class="btn btn-primary">Ver en detalle</a>
                </div>
                </div>
               `
            }
        }
    }
}
function cargar1(){

   // console.log('fufa');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/pokemon2.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
               //  console.log(item.nombre)
               res.innerHTML +=`
               <div class="card" style="width: 18rem; ">
                <img src="${item.img}" class="card-img-top" alt="${item.img}" >
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="${item.nombre}()" class="btn btn-primary">Ver en detalle</a>
                </div>
                </div>
               `
            }
        }
    }
}
function Pikachu(){
   
    console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/Pikachu', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}
function Bullbasaur(){
    console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/Bullbasaur', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}
function Charmander(){
    //console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/Charmander', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}
function Rattata(){
    //console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/Rattata', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}

function ELekid(){
    //console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/ELekid', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar1()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}

function Swinub(){
    //console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/Swinub', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar1()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}

function Unown(){
    //console.log('fufa');
    const xhttp = new XMLHttpRequest();
    var enlace=href=
    xhttp.open('GET', 'https://raw.githubusercontent.com/JuanAntonio21/pokedex/main/Unown', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
             console.log(datos);
            let res=document.getElementById('res')

            res.innerHTML= ''

            for(let item of datos){
                 console.log(item.nombre)
               res.innerHTML +=`
               <div onclick="youtube.com" class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.evolucion}</p>
                    <p class="card-text">Tipo: ${item.tipo}</p>
                    <a onclick="cargar1()" class="btn btn-primary">Volver</a>
                </div>
                </div>
               `
            }
        }
    }
}