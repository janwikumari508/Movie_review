// =========================================
// MOVIE DATA
// =========================================

const movies = [
    {
        title: "Interstellar",
        rating: "⭐ 8.7",
        description: "A team of astronauts travel through a wormhole in search of a new home for humanity.",
        image: "images/movie1.jpg"
    },
    {
        title: "Inception",
        rating: "⭐ 8.8",
        description: "A thief enters dreams to steal secrets but is given an impossible mission.",
        image: "images/movie2.jpg"
    },
    {
        title: "John Wick 4",
        rating: "⭐ 7.9",
        description: "John Wick faces powerful enemies across the globe in his final battle.",
        image: "images/movie3.jpg"
    },
    {
        title: "The Batman",
        rating: "⭐ 8.2",
        description: "Batman uncovers corruption while hunting a mysterious serial killer.",
        image: "images/movie4.jpg"
    },
    {
        title: "Avatar",
        rating: "⭐ 7.8",
        description: "A marine becomes part of the Na'vi civilization on Pandora.",
        image: "images/movie5.jpg"
    },
    {
        title: "Oppenheimer",
        rating: "⭐ 8.5",
        description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
        image: "images/movie6.jpg"
    },
    {
        title: "Spider-Man",
        rating: "⭐ 8.4",
        description: "Peter Parker faces villains from different universes.",
        image: "images/movie7.jpg"
    },
    {
        title: "Joker",
        rating: "⭐ 8.4",
        description: "The tragic transformation of Arthur Fleck into the Joker.",
        image: "images/movie8.jpg"
    }
];


// =========================================
// SELECT ELEMENTS
// =========================================

const modal = document.getElementById("movieModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("movieTitle");
const modalDescription = document.getElementById("movieDescription");

const closeBtn = document.querySelector(".close");

const searchInput = document.getElementById("searchInput");

const movieCards = document.querySelectorAll(".movie-card");


// =========================================
// OPEN MODAL
// =========================================

movieCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = movies[index].image;

        modalTitle.innerHTML = movies[index].title;

        modalDescription.innerHTML =
            movies[index].description;

    });

});


// =========================================
// CLOSE MODAL
// =========================================

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});


// =========================================
// LIVE SEARCH
// =========================================

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    movieCards.forEach((card) => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// =========================================
// HERO BUTTONS
// =========================================

const playBtn = document.querySelector(".play-btn");

const infoBtn = document.querySelector(".info-btn");

playBtn.addEventListener("click", () => {

    alert("🎬 Movie playback feature coming soon!");

});

infoBtn.addEventListener("click", () => {

    alert("Dune: Part Two (2024)\nIMDb: 8.5/10");

});


// =========================================
// SMOOTH SCROLL FOR NAVBAR
// =========================================

document.querySelectorAll("a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        if (this.getAttribute("href").startsWith("#")) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({

                    behavior: "smooth"

                });

        }

    });

});// =========================================
// WATCHLIST (LOCAL STORAGE)
// =========================================

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

const heartIcon = document.querySelector(".fa-heart");

heartIcon.addEventListener("click", () => {

    alert(`❤️ You have ${watchlist.length} movie(s) in your watchlist.`);

});

movieCards.forEach((card, index) => {

    const btn = card.querySelector("button");

    btn.addEventListener("click", (e) => {

        e.stopPropagation();

        const movie = movies[index];

        const exists = watchlist.find(item => item.title === movie.title);

        if (!exists) {

            watchlist.push(movie);

            localStorage.setItem("watchlist", JSON.stringify(watchlist));

            showToast(`${movie.title} added to Watchlist ❤️`);

        } else {

            showToast(`${movie.title} is already in Watchlist`);

        }

    });

});


// =========================================
// NEWSLETTER
// =========================================

const subscribeBtn = document.querySelector(".subscribe button");

const emailInput = document.querySelector(".subscribe input");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === ""){

        showToast("Please enter your email.");

        return;

    }

    if(!email.includes("@") || !email.includes(".")){

        showToast("Invalid email address.");

        return;

    }

    showToast("🎉 Thanks for subscribing!");

    emailInput.value="";

});


// =========================================
// ESC KEY CLOSE MODAL
// =========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";

    }

});


// =========================================
// SCROLL ANIMATION
// =========================================

const cards=document.querySelectorAll(".movie-card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const top=card.getBoundingClientRect().top;

        const trigger=window.innerHeight-100;

        if(top<trigger){

            card.style.opacity="1";
            card.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".8s";

});


// =========================================
// TOAST NOTIFICATION
// =========================================

function showToast(message){

    const toast=document.createElement("div");

    toast.innerText=message;

    toast.style.position="fixed";
    toast.style.bottom="30px";
    toast.style.right="30px";

    toast.style.background="#D4AF37";
    toast.style.color="#000";

    toast.style.padding="15px 25px";

    toast.style.borderRadius="12px";

    toast.style.fontWeight="600";

    toast.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";

    toast.style.zIndex="9999";

    toast.style.opacity="0";

    toast.style.transition=".4s";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.style.opacity="1";

    },100);

    setTimeout(()=>{

        toast.style.opacity="0";

    },2500);

    setTimeout(()=>{

        toast.remove();

    },3000);

}


// =========================================
// PAGE LOADER EFFECT
// =========================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .8s";

        document.body.style.opacity="1";

    },100);

});


// =========================================
// CURRENT YEAR IN FOOTER
// =========================================

const copyright=document.querySelector(".copyright");

copyright.innerHTML=`© ${new Date().getFullYear()} CineVerse. All Rights Reserved.`;


// =========================================
// CONSOLE MESSAGE
// =========================================

console.log("🎬 CineVerse Loaded Successfully");