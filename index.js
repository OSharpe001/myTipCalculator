const diningPics = [
    "images/dining1.png",
    "images/dining2.png",
    "images/dining3.png",
    "images/dining4.png",
    "images/dining5.png"
];

const billPics = [
    "images/dining_bill1.png",
    "images/dining_bill2.png",
    "images/dining_bill3.png",
];

const randomDining=diningPics[Math.floor(Math.random()*diningPics.length)];
const randomBill=billPics[Math.floor(Math.random()*billPics.length)];

document.querySelector("body").style.backgroundImage=`url(${randomDining})`;

function getTipAndTotal() {
    let percentString=document.getElementById("percentage").value;
    let percent=parseFloat(percentString)/100;
    let costString=document.getElementById("subtotal").value;
    let cost=parseFloat(costString);
    let tip=(cost*(percent));
    let total=(cost+tip);

    if (percentString && costString && percentString>0 && costString>0) {
        document.getElementById("total-tip").innerHTML = `Your tip will be $${tip.toFixed(2)} at ${percentString}%.`;
        document.getElementById("total-bill").innerHTML = `With this, your total bill will be $${total.toFixed(2)}.`;
        document.getElementById("total-tip").style.color = "rgb(1, 74, 1)";
        document.getElementById("total-tip").style.border="2px solid rgb(1, 74, 1)";
        document.getElementById("total-bill").style.border="2px solid rgb(1, 74, 1)";
        document.querySelector("body").style.backgroundImage=`url(${randomBill})`;
    } else {
        document.getElementById("total-tip").innerHTML = "Please fill out both inputs with positive numbers.";
        document.getElementById("total-tip").style.color = "red";
        document.getElementById("total-bill").innerHTML = null;
        document.getElementById("total-bill").style.border=null;
        document.querySelector("body").style.backgroundImage=null;
        document.querySelector("body").style.backgroundColor="lightgreen";
    };
};

function reset() {
    document.getElementById("subtotal").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("total-tip").innerHTML= "";
    document.getElementById("total-bill").innerHTML= "";
    document.getElementById("total-tip").style.border="none";
    document.getElementById("total-bill").style.border="none";
    document.querySelector("body").style.backgroundImage=`url(${randomDining})`;
};
