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
  div.addEventListener("mouseleave", changeColor);
});

//reset

const btnReset = document.querySelector(".btn");

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
