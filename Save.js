var saveitemstimer = setInterval(saveitem, 6000)
function saveitem() {
        localStorage.setItem("autoclickprice", autoclickprice);
        localStorage.setItem("autoclicker", autoclicker);
        localStorage.setItem("triggerfingerprice", triggerfingerprice);
        localStorage.setItem("triggerfinger", triggerfinger);
        localStorage.setItem("amountpclick", amountpclick);
        localStorage.setItem("playtime", playtime);
        localStorage.setItem("headshots", headshots);
        localStorage.setItem("shotsfired", shotsfired);
        localStorage.setItem("casesopened", casesopened);
        localStorage.setItem("ac_bank", ac_bank);
        localStorage.setItem("nameofbusiness", nameofbusiness);
        localStorage.setItem("GETLASTMONEY", document.getElementById("money").innerHTML);
        localStorage.setItem("GETLASTITEMS", document.getElementById("itemstext").innerHTML);
        localStorage.setItem("GetTeammateDiv", document.getElementById("teammatedivid").innerHTML);
        console.log("Saved progress automatically.")
        lastsaveseconds = -1
        document.title = `${document.getElementById("money").innerHTML} 💾 Saving...`
    }