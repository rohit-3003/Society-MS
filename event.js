const baseUrl = "http://localhost:3000";
const events = [];
async function getInfo(e) {

    const res = await fetch(baseUrl, {
        method: 'GET'
    })
    const data = await res.json();
    events.push(...data);

    const collection = document.querySelector('.collection');

    events.forEach((e) => {
        const box = document.createElement('div');
        const eachBox = document.createElement('div');
        const text = document.createElement('div');
        box.classList.add('box')
        text.classList.add('nameFest');
        eachBox.classList.add('eachBox');

        box.appendChild(eachBox)
        const cover = `images/events/${e.EVENT_ID}.jpg`;
        eachBox.style.backgroundImage = "url('" + cover + "')"
        text.innerText = e.NAME;
        collection.appendChild(box);
        box.appendChild(eachBox)
        box.appendChild(text);
        let childWindow = null;
        let open = false;
        box.addEventListener('click', () => {
            if (open) {  childWindow.postMessage(e, '*'); open = false }
            else {
                childWindow = window.open("./1.html", "childWindow");
                childWindow.addEventListener("load", () => {
                    childWindow.postMessage(e, "*");
                    open = true;
                });

            }

        })


    })
}
getInfo();
