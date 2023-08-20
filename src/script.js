// Wrap every letter in a span
var textWrapper = document.querySelector(".ali");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ali .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2250, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

window.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
});

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function genReason() {
  var randNum = Math.floor(Math.random() * reasons.length);
  document.getElementById('reason').innerHTML = reasons[randNum];
}

var reasons = [
  "haces postres muy sabrosos",
  "siempre me guardas arepas de bolita ala, son re ricas",
  "me gusta mucho hablar contigo",
  "me dejas ganar contando versas 🚗",
  "sabes lenguaje gatuno 🐈",
  "a ocheca 😉",
  "siempre estas ahi para mi",
  "eres mi pollimbiris precioso",
  "tu sonrisa 😊",
  "tus besimbiris 😘",
  "los arrunchis",
  "haces masajes ricos",
  "eres muy tierna",
  "eres muy sensible y pura",
  "tus bailes de colita",
  "lo mucho que te gusta estar conmigo",
  "lo considerada que eres",
  "el gran esfuerzo que haces cada dia",
  "como siempre estas creciendo, como una plantita 🌱",
  "lo amigable que eres con la gente",
  "que amas a lulu muchisisisisisisimo",
  "cuando me rascas la espaldita",
  "lo mucho que amas a tu familia",
  "lo graciosa que eres",
  "tu sinceridad",
  "tu forma de ver las cosas",
  "lo inteligente que eres 🧠",
  "tu preciosa voz, y cuando cantas 🎤",
  "lo bonito que es tu cabello",
  "siempre me intentas proteger del sol",
  "siempre me dices buenas noches 🌗",
  "cuidas mucho a peyito",
  "que sabes cuando un local lava dinero",
  "irnos de viaje los dos juntitos",
  "cocinar algo, aunque yo solo me quede en la esquina 🥗",
  "saaaaaaaaaaaaaaamsito 🥵",
  "quedarnos arrunchados viendo jojos",
  "que tambien seas hincha de millos socia",
  "como mi familia tambien te quiere mucho por como eres",
  "que eres bastante pollo claramente",
  "tu nariz (dejame morderte) 👃🏻",
  "que las gafas te quedan muy bien 🤓",
  "como siempre pruebas cosas nuevas 🍲",
  "ir al mar juntos (pronto vamos de nuevo)",
  "lo romantica que eres",
  "que sabes que messi es la cabra",
  "tu estilo",
  "pasamos mucho tiempo juntos y aun sigo conociendo cosas de ti",
  "lo mucho que tomas te (ya me gusta mas) 🍵",
  "escucharte tocar el ukelele",
];

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
