const altResult = document.querySelector(".alternative-text")
const Slidebtn = document.querySelector(".Slidebtn")
const BtnSlider = document.querySelectorAll(".list2 button")
const [animationDuration, transitionDuration] = [3500, 1000]
const altText = [
    { Text: "weeknight dinner idea", color: "rgb(194, 139, 0)", picture1: "blue", picture2: "blue", picture3: "blue", picture4: "blue", picture5: "blue" },
    { Text: "home decor idea", color: "rgb(97, 140, 123)", picture1: "blue", picture2: "blue", picture3: "blue", picture4: "blue", picture5: "blue" },
    { Text: "new look outfit", color: "rgb(0, 118, 211)", picture1: "blue", picture2: "blue", picture3: "blue", picture4: "blue", picture5: "blue" },
    { Text: "green thumb idea", color: "rgb(64, 122, 87)", picture1: "blue", picture2: "blue", picture3: "blue", picture4: "blue", picture5: "blue" }
]

const delayBeforeShowingText = 10; // Délai avant d'afficher le texte
const delayBeforeNextAnimation = animationDuration - transitionDuration; // Délai avant la prochaine animation


// gestion en dessous des animations de la premiere section

const RandomText = (i) => {
  if (!altResult || !BtnSlider) {
    console.error('Les éléments HTML nécessaires sont introuvables.');
    return;
  }

  altResult.style.animation = `T-anim-in ${transitionDuration}ms`;
  altResult.style.opacity = `1`;
  Slidebtn.style.backgroundColor = "";
  
  setTimeout(() => {
      altResult.innerHTML = altText[i].Text;
      altResult.style.opacity = 1;
      BtnSlider[i].style.backgroundColor = altText[i].color;
      Slidebtn.style.backgroundColor = altText[i].color;
      altResult.style.color = altText[i].color;
    }, delayBeforeShowingText);
    
    setTimeout(() => {
        altResult.style.animation = "";
    }, transitionDuration);
    
    setTimeout(() => {
        altResult.style.animation = `T-anim-out ${transitionDuration}ms`;
        altResult.style.opacity = `0`;
    setTimeout(() => {
      altResult.style.opacity = 0;
      altResult.style.animation = "";
      Slidebtn.style.backgroundColor = "";
      BtnSlider[i].style.backgroundColor = "";
      RandomText((i + 1) % altText.length);
    }, transitionDuration);
  }, delayBeforeNextAnimation);
};

RandomText(0);
