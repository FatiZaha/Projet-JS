var content = document.querySelector('.content');
var rv= document.getElementById('aside');


function creationCours(path, title, price) {
    let div = document.createElement('div'); // <aside></aside>
    div.setAttribute('class', 'card col-3 me-2 mb-2'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    img.src = path;
    img.setAttribute('class', 'card-img');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title');
    span.appendChild(document.createTextNode(price+"$"));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    content.append(div);
}

prog.forEach(function(element) {
    creationCours(element.image, element.title, element.price)
})

//------------------BTN ALL------------------------------------------------------
document.getElementById("all").addEventListener('click',function(){
   rv.replaceChildren();
    prog.forEach(function(element) {
       
        creationCours(element.image, element.title, element.price)
    })
})


//------------------BTN JS------------------------------------------------------
document.getElementById("js").addEventListener('click',function(){
    rv.replaceChildren();
    prog.forEach(function(element) {
        
        if(element.category.toUpperCase()=='JS')
        creationCours(element.image, element.title, element.price)
    })
})


//------------------BTN CSS------------------------------------------------------
document.getElementById("css").addEventListener('click',function(){
    rv.replaceChildren();
    prog.forEach(function(element) {
        
        if(element.category.toUpperCase()=='CSS')
        creationCours(element.image, element.title, element.price)
    })
})

//------------------BTN HTML------------------------------------------------------
document.getElementById("html").addEventListener('click',function(){
    rv.replaceChildren();
    prog.forEach(function(element) {
        
        if(element.category.toUpperCase()=='HTML')
        creationCours(element.image, element.title, element.price)
    })
})



//------------------BTN PHP------------------------------------------------------
document.getElementById("php").addEventListener('click',function(){
    rv.replaceChildren();
    prog.forEach(function(element) {
        
        if(element.category.toUpperCase()=='PHP')
        creationCours(element.image, element.title, element.price)
    })
})



//------------------BTN JS-G4------------------------------------------------------
document.getElementById("jsG4").addEventListener('click',function(){
    rv.replaceChildren();
    prog.forEach(function(element) {
        
        if(element.category=='JS_g4')
        creationCours(element.image, element.title, element.price)
    })
})
//------------------Price------------------------------------------------------
var price=document.getElementById('range');

price.addEventListener('change',function(){
    document.getElementById("prix").innerText=(price.value+"$");

    rv.replaceChildren();
    prog.forEach(function(element) {
        
        if(element.price<=price.value)
        creationCours(element.image, element.title, element.price)
    })
})

//------------------Search...------------------------------------------------------

var search=document.getElementById('search');

search.addEventListener('input',function(){
   
    rv.replaceChildren();
    prog.forEach(function(element) {
        v=search.value.toUpperCase();
        if(element.category.toUpperCase().includes(v))
        creationCours(element.image, element.title, element.price)
    })
})

