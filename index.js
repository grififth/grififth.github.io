
var learnMoreBtn = document.getElementById('learnMoreBtn');
var mainSection = document.getElementsByClassName('mainSection')[0];

var leftImage = document.getElementsByClassName('leftImage')[0];

var wiperList = document.getElementsByClassName('wiper');
var wipers = document.getElementsByClassName('wipers')[0];
var aboutMeTitle = document.getElementsByClassName('aboutMeTitle')[0];
var aboutMeBody = document.getElementsByClassName('aboutMeBody')[0];
var aboutMeImg = document.getElementsByClassName('aboutMeImg')[0];

var mainTitle = document.getElementById('homeTitle');

var backAboutMeBtn = document.getElementById('backAboutMeBtn');
// var projectsBtn = document.getElementById('projectsBtn');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function clearScreen() {
    mainSection.style.opacity = 0;
    leftImage.style.display = 'none';
    aboutMeImg.style.display = 'none';
    for(let aboutMeBodyIt of aboutMeBody.children) {
        aboutMeBodyIt.classList.remove('slideRightClass');
        aboutMeBodyIt.style.opacity = 0;
    }
    aboutMeTitle.classList.remove('slowAppearClass');
    // backAboutMeBtn.classList.remove('fastAppearClass');
    // projectsBtn.classList.remove('fastAppearClass')
    aboutMeTitle.opacity = 0;
    // backAboutMeBtn.opacity = 0;
    // projectsBtn.opacity = 0;
}

async function wipeScreen() {
    wipers.classList.add('alignEnd')

    for(let wiper of wiperList) {
        await sleep(50);
        wiper.classList.remove('wiperClose')
        wiper.classList.add('wiperOpen')
    }

    await sleep(500);

    await clearScreen();

    wipers.classList.add('alignStart');
    wipers.classList.remove('alignEnd');

    for(let wiper of wiperList) {
        await sleep(50);
        wiper.classList.remove('wiperOpen');
        wiper.classList.add('wiperClose');
    }
}

async function homePage() {
    await wipeScreen();

    await sleep(500);

    mainTitle.classList.add('slideLeftClass')

}

async function aboutMe() {
    await wipeScreen();

    await sleep(500);

    aboutMeTitle.classList.add('slowAppearClass');

    await sleep(750);

    for(let aboutMeBodyIt of aboutMeBody.children) {
        await sleep(200);
        aboutMeBodyIt.classList.add('slideRightClass');
    }

    await sleep(500)

    aboutMeImg.style.display = 'initial';
    aboutMeImg.classList.add('slideBelowClass');

    await sleep(500);

    backAboutMeBtn.classList.add('fastAppearClass');

    await sleep(200);

    projectsBtn.classList.add('fastAppearClass');

}

learnMoreBtn.addEventListener("click", async (e) => {aboutMe()});
backAboutMeBtn.addEventListener("click", async (e) => {homePage()});