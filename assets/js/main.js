
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

//Get the button
var mybutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// let page = document.getElementById("page");
// var array_recensioni = [];

// let myRequest = new Request("https://github.com/Tzemona/PW_Stage/blob/master/Scuola.json");

    
// fetch(myRequest)
// .then(function(resp){
//     return resp.json();
// })
// .then(function(data){
// //console.log(data);

// //gestisco l'eventuale errore nel recupero del json
// //.catch(error => console.log("Error: " + error));
//         let i=0;

//         data.database.forEach(element => {
            
//             i++;
//             //un contenitore per tutto il film
//             let macro_container = document.createElement("div");
//             macro_container.className = "macro_container";

//             //un contenitore per immagine e descrizione minima
//             let film_container = document.createElement("div");

//             //un contenitore per trama e dettagli
//             let film_description = document.createElement("div");
            
            
//             macro_container.appendChild(film_container);
//             macro_container.appendChild(film_description);

//             //-film container
//             film_container.id = "film_id"+element.id;
//             film_container.className = "film";

//             //-IMG (contenitore copertina)
//             let img_container = document.createElement("div");
//             img_container.id = "img_left";
//             film_container.appendChild(img_container);
//             //immagine copertina
//             let copertina = document.createElement("img");
//             copertina.srcset = element.copertina;
//             img_container.append(copertina);

//             if (element.ora_in_sala == true) {

//                 let poster = document.createElement("img");
//                 poster.className = "d-block w-100";
//                 poster.srcset = element.copertina;
//                 let carousel_item = document.createElement("div");
                
//                 //forma compatta per: if(i==1) carousel_item.className = "carousel-item active";
//                 //                    else     carousel_item.className = "carousel-item";
//                 carousel_item.className = (i == 1) ? "carousel-item active" : "carousel-item";
//                 carousel_item.appendChild(poster);
//                 document.getElementById("slide-container").appendChild(carousel_item);
//             }

//             //-TEXT (contenitore descrizione minima)
//             let text_container = document.createElement("div");
//             text_container.id = "text_right";
//             film_container.appendChild(text_container);
//             //titolo
//             let titolo = document.createElement("h2");
//             titolo.setAttribute("onclick", "mostra_description("+element.id+")");
//             titolo.innerHTML= element.titolo;
//             text_container.append(titolo);

//             //regia
//             let regia = document.createElement("p");
//             regia.innerHTML= "Regia di: "+element.regia;
//             text_container.append(regia);

//             //genere
//             let genere = document.createElement("p");
//             genere.innerHTML= "Genere: "+element.genere;
//             text_container.append(genere);


//             //anno
//             let anno = document.createElement("p");
//             anno.innerHTML= "Anno: "+element.anno;
//             text_container.append(anno);


//             //durata
//             let durata = document.createElement("p");
//             durata.innerHTML= "Durata: "+element.durata+ "min";
//             text_container.append(durata);
            

//             //recenzione_container
//             let recensione_container = crea_rating(element.recensione);           
//             recensione_container.id = "rece_container"+element.id;
//             recensione_container.className = "rece";
//             text_container.appendChild(recensione_container);


//             //-FILM DESCRIPTION
//             film_description.id = "film_description_id"+element.id;
//             film_description.className = "description";
//             film_description.style.display = "none";

//             //descripion container
//             let descripion_container = document.createElement("div");
//             descripion_container.className = "lallero";
//             film_description.appendChild(descripion_container);
//             descripion_container.innerHTML = element.trama;

//             //btn container
//             let btn_container = document.createElement("div");
//             film_description.appendChild(btn_container);
//             btn_container.className = "container_button" //+element.id;
//             let back_btn = document.createElement("button");
//             btn_container.append(back_btn);
//             back_btn.innerHTML = "Back";
//             back_btn.className="btn btn-light";
//             back_btn.setAttribute("onclick", "mostra_description()");

            
            

//             page.append(macro_container);
//         });
//     });
