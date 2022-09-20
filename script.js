function openBrewery(input) {
    input.map((n) => {
        document.querySelector(".user_list").innerHTML += `<div class="nav-container">
        <div class="container">
        <img class="brewery_img" src="https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/BreweryDB%20API%20Image.png?itok=2GgFCvsH">
        <p><span>Name :</span> ${n.name}</p>
        <p><span>Address1 :</span>${n.address_2}</p>
        <p><span>Address2 :</span>${n.address_3}</p>
        <p><span>Type :</span> ${n.brewery_type}</p>
        <p><span>Phone no :</span> ${n.phone}</p>
        <p><span>Url :</span>
        <a href=${n.website_url} target = "_blank"> Visit</a>
        </p>
        </div>
        </div>
        `

    })
}

async function getUser() {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries", {
            method: "GET",
        });
        const breweries = await data.json()
        console.log(openBrewery(breweries))
    } catch (rejected) {
        console.log(rejected)
    }
}
getUser()