let fetchacprice = localStorage.getItem("autoclickprice");
let IDSTARTSAT = 0
let loopids = true
let currentidchecked = 0

if (fetchacprice) {
    fetchautoclicker = localStorage.getItem("autoclicker");
    fetchtriggerfingerprice = localStorage.getItem("triggerfingerprice");
    fetchtriggerfinger = localStorage.getItem("triggerfinger");
    fetchamountpclick = localStorage.getItem("amountpclick");
    fetchplaytime = localStorage.getItem("playtime");
    headshots123 = localStorage.getItem("headshots")
    fetchshotsfired = localStorage.getItem("shotsfired");
    fetchcasesopened = localStorage.getItem("casesopened");
    fetchac_bank = localStorage.getItem("ac_bank");
    fetchnameofbusiness = localStorage.getItem("nameofbusiness");
    prevItems = localStorage.getItem("GETLASTITEMS");
    PFprevmoney = localStorage.getItem("GETLASTMONEY")
    GetTeammateDiv = localStorage.getItem("GetTeammateDiv")


    document.getElementById("money").innerHTML = PFprevmoney
    document.getElementById("itemstext").innerHTML = prevItems
    document.getElementById("teammatedivid").innerHTML = GetTeammateDiv

    autoclickprice = fetchacprice
    autoclicker = fetchautoclicker
    triggerfingerprice = fetchtriggerfingerprice
    triggerfinger = fetchtriggerfinger
    amountpclick = fetchamountpclick
    nameofbusiness = fetchnameofbusiness
    playtime = fetchplaytime
    shotsfired = fetchshotsfired
    headshots = headshots123
    casesopened = fetchcasesopened
    ac_bank = fetchac_bank

    var timer3 = setInterval(myTimer3, 50);
    
    function myTimer3(){
        if (loopids == true) {
            currentidchecked ++;
            if (document.getElementById(`${currentidchecked}`) == null) {
                idforbutton = currentidchecked - 1
                loopids = false
            }
        }
    }
}