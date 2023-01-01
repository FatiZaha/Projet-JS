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



    



n=parseInt(Math.random() * prog.length) ;
console.info(n)
if(n<3 || n<prog.length-3){
for(var j=n;j<n+3;j++){


img=prog[j].image;
tlt=prog[j].title;
px=prog[j].price;
    creationCours(img,tlt ,px )
}}
else{
    
        for(var j=n;j>n-3;j--){
        
        
        img=prog[j].image;
        tlt=prog[j].title;
        px=prog[j].price;
            creationCours(img,tlt ,px )
        }
}






  

