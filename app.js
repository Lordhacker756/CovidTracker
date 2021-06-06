var cases = document.getElementById('cases');
var active = document.getElementById('active');
var cured = document.getElementById('cured');
var deaths = document.getElementById('deaths');

var update = document.getElementById('update_btn');
var spinnner = document.getElementById('loader')

update.addEventListener('click', Update)

function Update() {
    console.log('clicked')
    spinnner.classList.add('l-active')
    fetch('https://www.trackcorona.live/api/countries')
        .then((response) => {
            return response.json()
        })
        .then((apidata) => {
            for (var i = 0; i < 99; i++) {
                if (apidata.data[i].location == "India") {
                    spinnner.classList.remove('l-active')
                    console.log(apidata.data[i].location)
                    cases.innerHTML = `${apidata.data[i].confirmed}`
                    active.innerHTML = `${apidata.data[i].updated.substring(0, 19)}`
                    cured.innerHTML = `${apidata.data[i].recovered}`
                    deaths.innerHTML = `${apidata.data[i].dead}`
                }
            }

        })
        .catch((e) => {
            alert('Try Viewing The Site In Incognito Mode')
        });
}

Update();
