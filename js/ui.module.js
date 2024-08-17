// export class Ui {
//   displaySecificCat(data) {
//     let store = "";
//     for (let i = 0; i < data.length; i++) {
//       store += `
//         <div class="col">
//          <div data-id="${
//            data[i].id
//          }"  class="card h-100 bg-transparent" role="button" ">
//             <div  class="card-body">
//                <figure class="position-relative">
//                   <img class="card-img-top object-fit-cover h-100" src="${
//                     data[i].thumbnail
//                   }" />
               
//                </figure>
   
//                <figcaption>
   
//                   <div class="hstack justify-content-between">
//                      <h3 class="h6 small">${data[i].title}</h3>
//                      <span class="badge text-bg-primary p-2">Free</span>
//                   </div>
   
//                   <p class="card-text opacity-50 text-white">
//                      ${data[i].short_description.split(" ", 8)}
//                   </p>
   
//                </figcaption>
//             </div>
   
//             <footer class="card-footer small hstack justify-content-between">
   
//                <span class="badge badge-color">${data[i].genre}</span>
//                <span class="badge badge-color">${data[i].platform}</span>
   
//             </footer>
//          </div>
//       </div>`;
//     }
//     document.querySelector("#gameData").innerHTML = store;
//   }
//   displayDetails(data) {
//     const content = `
//    <div class="col-md-4">
//    <img src="${data.thumbnail}" class="w-100" alt="image details" />
// </div>
// <div class="col-md-8">
//    <h3>Title: ${data.title}</h3>
//    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
//    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
//    <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
//    <p class="small">${data.description}</p>
//    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
// </div>
   
//    `;

//     document.getElementById("detailsContent").innerHTML = content;
//   }
// }
export class Ui {
   displaySecificCat(data, currentPage = 1, itemsPerPage = 8) {
     let store = "";
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const paginatedData = data.slice(startIndex, endIndex);
 
     for (let i = 0; i < paginatedData.length; i++) {
       store += `
         <div class="col">
           <div data-id="${
             paginatedData[i].id
           }" class="card h-100 bg-transparent" role="button">
             <div class="card-body">
               <figure class="position-relative">
                 <img class="card-img-top object-fit-cover h-100" src="${
                   paginatedData[i].thumbnail
                 }" />
               </figure>
               <figcaption>
                 <div class="hstack justify-content-between">
                   <h3 class="h6 small">${paginatedData[i].title}</h3>
                   <span class="badge text-bg-primary p-2">Free</span>
                 </div>
                 <p class="card-text opacity-50 text-white">
                   ${paginatedData[i].short_description.split(" ", 8).join(" ")}
                 </p>
               </figcaption>
             </div>
             <footer class="card-footer small hstack justify-content-between">
               <span class="badge badge-color">${paginatedData[i].genre}</span>
               <span class="badge badge-color">${
                 paginatedData[i].platform
               }</span>
             </footer>
           </div>
         </div>`;
     }
     document.querySelector("#gameData").innerHTML = store;
   }
 
   displayPagination(totalItems, itemsPerPage, currentPage) {
     const totalPages = Math.ceil(totalItems / itemsPerPage);
     let paginationHTML = "";
     for (let i = 1; i <= totalPages; i++) {
       paginationHTML += `<button class="mx-2 page-btn btn ${
         i === currentPage ? "btn-primary" : "btn-secondary"
       }" data-page="${i}">${i}</button>`;
     }
 
     document.querySelector("#pagination").innerHTML = paginationHTML;
   }
     displayDetails(data) {
    const content = `
   <div class="col-md-4">
   <img src="${data.thumbnail}" class="w-100" alt="image details" />
</div>
<div class="col-md-8">
   <h3>Title: ${data.title}</h3>
   <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
   <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
   <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
   <p class="small">${data.description}</p>
   <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
</div>
   
   `;

    document.getElementById("detailsContent").innerHTML = content;
  }
 }
 