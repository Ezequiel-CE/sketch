const container = document.querySelector(".container");

//llena la grid inicialmente
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("piece");
  container.appendChild(div);
}
let pieces = document.querySelectorAll(".piece");

//codigo

const changeColor = (e) => {
  e.target.classList.add("passed");
};

pieces.forEach((div) => {
  div.addEventListener("mouseenter", changeColor);
});

//reset

const btnReset = document.querySelector("#reset");

const resetGrid = () => {
  //remove the class passed
  pieces.forEach((div) => {
    div.classList.remove("passed");
  });

  //pide nuevos elementos

  const newGridSide = parseInt(
    prompt("enter the number of squares per side for the new grid (max 100)")
  );

  if (newGridSide > 100) {
    alert("You passed the allowed limit");
    return;
  }

  if (!newGridSide) return;

  //borra los elementos de la grid anterior
  for (let i = 0; i < pieces.length; i++) {
    container.removeChild(container.firstChild);
  }

  //llena los elementos

  for (let i = 0; i < newGridSide * newGridSide; i++) {
    const div = document.createElement("div");
    div.classList.add("piece");
    container.appendChild(div);
  }

  //resigna las piesas

  pieces = document.querySelectorAll(".piece");
  container.style["grid-template-columns"] = `repeat(${newGridSide}, 1fr)`;
  container.style["grid-template-rows"] = `repeat(${newGridSide}, 1fr)`;

  //les coloca el evento
  pieces.forEach((div) => {
    div.addEventListener("mouseleave", changeColor);
  });
};

btnReset.addEventListener("click", resetGrid);

//RGB

const btnRgb = document.querySelector("#rgb");

const changeColorRGB = (e) => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${x},${y},${z})`;
};

//QUita los colores y agrega rgb
const colorRGB = () => {
  pieces.forEach((div) => {
    div.removeEventListener("mouseenter", changeColor);
    div.removeEventListener("mouseenter", changeColorBlack);

    div.addEventListener("mouseenter", changeColorRGB);
  });
};
btnRgb.addEventListener("click", colorRGB);

//black

const btnBlack = document.querySelector("#black");

const changeColorBlack = (e) => {
  e.target.style.backgroundColor = "black";
};

//quita los otro y agrega black

const ColorBlack = () => {
  pieces.forEach((div) => {
    div.removeEventListener("mouseleave", changeColor);
    div.removeEventListener("mouseleave", changeColorRGB);

    div.addEventListener("mouseenter", changeColorBlack);
  });
};

btnBlack.addEventListener("click", ColorBlack);

//incemeent darkeness
