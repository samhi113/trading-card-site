const downBtn = document.getElementById("downBtn");
const upBtn = document.getElementById("upBtn");

var secCount = 3;
var LSec = []
var RSec = []

for (let i = 0; i < secCount + 1; i++) {
    LSec.push(document.getElementById(`LSec${i}`));
    RSec.push(document.getElementById(`RSec${i}`));
}

var depth = 100;
var mouseX = 0;

onscroll = function(e){scrollAnim(e)};
onload = function(e){scrollAnim(e)};

function scrollAnim(e) {
    const screenHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    depth = 100 + (100 * scrollY / screenHeight);
    console.log("Depth is ", depth);

    for (let j = 1; j < (secCount + 1); j++) {
        const LSection = LSec[j];
        const RSection = RSec[j];
        var transform = 1 / Math.sqrt((-3 * (depth - (j*100)) / 100) + 1);

        LSection.style.transform = `scale(${transform}, ${transform})`;
        LSection.style.left = `${11 - transform}vw`;

        RSection.style.transform = `scale(${transform}, ${transform})`;
        RSection.style.left = `${61 + transform}vw`;

        LSection.style.zIndex = (99 - j);
        RSection.style.zIndex = (99 - j);

        if (depth > j * 100 + 45) {

            LSection.style.opacity = 0;
            RSection.style.opacity = 0;

            LSection.style.zIndex = 0;
            RSection.style.zIndex = 0;

        } else {

            var LRotate = ((j * 100) - depth - 10) * -1.8;
            var RRotate = ((j * 100) - depth - 10) * 1.8;
            LSection.style.transform = `rotateY(${LRotate}deg)`;
            RSection.style.transform = `rotateY(${RRotate}deg)`;

            LSection.style.opacity = 1;
            RSection.style.opacity = 1;

            upBtn.href = `#card${j-1}`
            downBtn.href = `#card${j+1}`
        }
    }
}