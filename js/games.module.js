// import { Details } from "./details.module.js";
// import { Ui } from "./ui.module.js";

// export class Games {
//   constructor() {
//     this.GetGames("mmorpg");
//     this.activation();
//     this.ui = new Ui();
//   }
//   activation() {
//     document.querySelectorAll(".nav-link").forEach((link) => {
//       link.addEventListener("click", () => {
//         document.querySelector(".menu .active").classList.remove("active");
//         link.classList.add("active");
//         this.GetGames(link.getAttribute("data-category"));
//       });
//     });
//   }

//   async GetGames(catogery) {
//     const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.${catogery}.fantasy.pvp&platform=pc`;
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "4335a953bemsha5e7abefdf62bc2p1f8230jsnc5fff2b3033c",
//         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       this.ui.displaySecificCat(result);
//       this.detailes();
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   detailes() {
//     this.de = new Details();
//     document.querySelectorAll(".card").forEach((game) => {
//       game.addEventListener("click", () => {
//         this.de.getDetails(game.getAttribute("data-id"));
//         document.querySelector(".games").classList.add("d-none");
//         document.querySelector(".details").classList.remove("d-none");
//       });
//     });
//   }
// }

import { Ui } from"./ui.module.js";
import { Details } from './details.module.js';

export class Games {
  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = 8; // Number of items per page
    this.ui = new Ui();
    this.GetGames("mmorpg");
    this.activation();
   
  }

  activation() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".menu .active").classList.remove("active");
        link.classList.add("active");
        this.currentPage = 1; // Reset to the first page when category changes
        this.GetGames(link.getAttribute("data-category"));
      });
    });

    // Add event listener for pagination buttons
    
    document.querySelector("#pagination").addEventListener("click", (e) => {
      if (e.target.classList.contains("page-btn")) {
        this.currentPage = parseInt(e.target.getAttribute("data-page"));
        this.GetGames(document.querySelector(".menu .active").getAttribute("data-category"));
      }
    });
  }

  async GetGames(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.${category}.fantasy.pvp&platform=pc`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4335a953bemsha5e7abefdf62bc2p1f8230jsnc5fff2b3033c",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.ui.displaySecificCat(result, this.currentPage, this.itemsPerPage);
      this.ui.displayPagination(result.length, this.itemsPerPage, this.currentPage);
      
      this.detailes();
    } catch (error) {
      console.error(error);
    }
  }

  detailes() {
    this.de = new Details();
    document.querySelectorAll(".card").forEach((game) => {
      game.addEventListener("click", () => {
        this.de.getDetails(game.getAttribute("data-id"));
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
      });
    });
  }
}
