const buttonEl = document.getElementById("generate_btn");
const singleColorGenerator = () => {
    let hex = [0, 1, 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random]
        console.log(random)
    }
    return hexColor;
};
const colorpeleteGenerator = () => {
    
    const colorpelete = [];
    for (let i = 0; i < 4; i++) {
        colorpelete.push(singleColorGenerator())
    }
    console.log(colorpelete)
    return colorpelete;
};
const randerColor = () => {
    const colorContainerEl = document.querySelector(".color_container")
    colorContainerEl.innerHTML = "";
    let colorpelete = colorpeleteGenerator();
    colorpelete.forEach((color, i) => {
        const colorDiv = document.createElement("div")
        colorDiv.id = `color${i + 1}`;
        colorDiv.className = "colorBox"
        colorDiv.style.background = color;
        const colorTag = document.createElement("p")
        colorTag.id = `color${i + 1}Tag`;
        colorTag.className = "colorTag";
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag)
        colorContainerEl.appendChild(colorDiv);
    })
    const copytoClipboard = (id) => {
        const el = document.getElementById(id);
        navigator.clipboard.writeText(el.innerText).then(() => {
            alert("Copy to clipboard")
        }).catch((err) => {
            alert("Could not copied")
        })
    }
    const colorTagEl = document.querySelectorAll(".colorTag");
    colorTagEl.forEach((colorTagEl, i) => {
        colorTagEl.addEventListener("click", () => copytoClipboard(`color${i + 1}`))
    })
    
};
buttonEl.addEventListener("click", randerColor)