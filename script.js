window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa();
  esemenyKezeles1();
  esemenyKezeles2();
});

function elemekElerese1() {
  const elem1 = document.querySelectorAll("section h2")[0];
  console.log(elem1);
}

function elemekElerese2() {
  let elem2 = document.getElementById("ide");
  elem2.innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
  let elem3 = document.getElementsByClassName("ide");
  elem3[0].innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
  let elem4 = document.getElementsByClassName("lista");
  elem4[0].innerHTML = "<ul>";
  for (let i = 0; i < 5; i++) {
    let randomSzam = Math.floor(Math.random() * 30 - 10 + 1) + 10;
    elem4[0].innerHTML += `<li>${randomSzam}</li>`;
  }
  elem4[0].innerHTML += "</ul>";
}

function elemekFormazasa() {
  let elem5 = document.getElementsByClassName("lista");
  elem5[0].classList.add("formazott");
}

function esemenyKezeles1() {
  let kattElott = document.getElementsByClassName("lista")[0];
  let kattUtan = document.getElementsByClassName("kattintasutan")[0];

  kattElott.addEventListener("click", athelyez);

  function athelyez(event) {
    let kattElott = event.target;
    kattUtan.appendChild(kattElott);
  }
}

function esemenyKezeles2() {
  let feladatElem = document.getElementsByClassName("feladat");
  feladatElem[0].innerHTML = "<button>OK</button>";
  let gombElem = document.querySelector(".feladat button");
  gombElem.addEventListener("click", kep);
  function kep() {
    feladatElem[0].innerHTML += `<div class="kocsiKep"><img src="kodiaq_blue.webp" alt=""></div>`;
    esemenyKezeles3();
  }

}

function esemenyKezeles3() {
    let kepElem = document.getElementsByClassName("kocsiKep")
    kepElem[0].addEventListener("mouseover", nagyit)

    function nagyit() {
        kepElem[0].style.width = "125%";
    }
}
