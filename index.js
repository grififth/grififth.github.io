
var learnMoreBtn = document.getElementById('learnMoreBtn');
var mainSection = document.getElementsByClassName('mainSection')[0];

var leftImage = document.getElementsByClassName('leftImage')[0];

var wiperList = document.getElementsByClassName('wiper');
var wipers = document.getElementsByClassName('wipers')[0];
var aboutMeTitle = document.getElementsByClassName('aboutMeTitle')[0];
var aboutMeBody = document.getElementsByClassName('aboutMeBody')[0];
var aboutMeImg = document.getElementsByClassName('aboutMeImg')[0];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

learnMoreBtn.addEventListener("click", async (e) => {

    wipers.classList.add('alignEnd')

    for(let wiper of wiperList) {
        await sleep(50);
        wiper.classList.add('wiperOpen')
    }

    await sleep(500);

    mainSection.style.opacity = 0;
    leftImage.style.display = 'none';

    wipers.classList.add('alignStart');
    wipers.classList.remove('alignEnd');

    for(let wiper of wiperList) {
        await sleep(50);
        wiper.classList.remove('wiperOpen');
        wiper.classList.add('wiperClose');
    }

    await sleep(500);

    aboutMeTitle.classList.add('slowAppearClass');

    await sleep(750);

    console.log(aboutMeBody)
    console.log(aboutMeBody.children)

    for(let aboutMeBodyIt of aboutMeBody.children) {
        await sleep(200);
        aboutMeBodyIt.classList.add('slideRightClass');
    }

    await sleep(500)

    aboutMeImg.style.display = 'initial';
    aboutMeImg.classList.add('slideBelowClass');


});