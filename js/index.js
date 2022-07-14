const earnSwitchTitle = () => {
    let title = document.getElementById("titleEarnSwitch");
    let titleContent = title.innerText;
    let firstEarnContent = document.querySelector('.earnFirstContent')
    let secondEarnContent = document.querySelector('.earnSecondContent')
    if (titleContent == "Farms") {
        firstEarnContent.classList.add('hideEarn');
        secondEarnContent.classList.remove('hideEarn');
        title.innerHTML = "Syrup Pools";
    } else {
        firstEarnContent.classList.remove('hideEarn');
        secondEarnContent.classList.add('hideEarn');
        title.innerHTML = "Farms";
    }
}
setInterval(earnSwitchTitle, 5000);

document.getElementById('btnEarn').addEventListener('click', () => {earnSwitchTitle()});