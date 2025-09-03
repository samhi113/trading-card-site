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
        var depthPct = (depth - (j*100)) / 100;
        var transform = 1 / Math.sqrt((-2 * depthPct) + 1);
        var translate =  (1 / Math.sqrt((-1 * depthPct) + 0.5)) - 1.4142;
        translate = 5 * translate;

        LSection.style.left = `${15 - translate}vw`;
        LSection.style.perspective = `${10 * transform}vw`;

        RSection.style.left = `${55 + translate}vw`;
        RSection.style.perspective = `${10 * transform}vw`;

        LSection.style.zIndex = (99 - j);
        RSection.style.zIndex = (99 - j);

        if (depth > j * 100 + 45) {

            LSection.style.opacity = 0;
            RSection.style.opacity = 0;

            LSection.style.zIndex = 0;
            RSection.style.zIndex = 0;

        } else if (depth < j * 100) {

            var LRotate = ((j * 100) - depth - 10) * 0.2;
            var RRotate = ((j * 100) - depth - 10) * -0.2;
            LSection.style.transform = `rotateY(${LRotate}deg) scale(${transform}, ${transform})`;
            RSection.style.transform = `rotateY(${RRotate}deg) scale(${transform}, ${transform})`;

            LSection.style.opacity = 1;
            RSection.style.opacity = 1;

        } else {

            var LRotate = ((j * 100) - depth - 10) * -1.8;
            var RRotate = ((j * 100) - depth - 10) * 1.8;
            LSection.style.transform = `rotateY(${LRotate}deg) scale(${transform}, ${transform})`;
            RSection.style.transform = `rotateY(${RRotate}deg) scale(${transform}, ${transform})`;

            LSection.style.opacity = 1;
            RSection.style.opacity = 1;

            upBtn.href = `#card${j-1}`
            downBtn.href = `#card${j+1}`
        }
    }
}