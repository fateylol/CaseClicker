
    var autoclickprice = 2.50
    var autoclicker = 0.10
    var triggerfingerprice = 5.00
    var triggerfinger = 0.10
    var amountpclick = 0.10
    var nameofbusiness = ""
    var playtime = 0
    var shotsfired = 0
    var headshots = 0
    var casesopened = 0

    function setac() {
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
        let acvalentered = document.getElementById("acinput").value

        if (!isNaN(acvalentered)) {
            autoclicker = acvalentered
            document.getElementById("acinput").value = ""
        }
    }

    function setmoney() {
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
        let moneyvalentered = document.getElementById("moneyinput").value

        if (!isNaN(moneyvalentered)) {
            document.getElementById("money").innerHTML = `${moneyvalentered}`
            document.getElementById("moneyinput").value = ""
        }
    }

    function close3() {
        document.getElementById("menu8").style.visibility = "hidden";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function submitcc() {
        let valuesentered = document.getElementById("ccinput").value

        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
        if (valuesentered == cheatcode) {
            document.getElementById("ccinput").value = ""
            document.getElementById("ccinput").placeholder = "Enter code here"
            document.getElementById("menu1").style.visibility = "hidden";
            document.getElementById("menu8").style.visibility = "visible";
        } else {
            document.getElementById("ccinput").value = ""
            document.getElementById("ccinput").placeholder = "Wrong code was entered."
        }
    }

    function closestats() {
        document.getElementById("menu7").style.visibility = "hidden";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function openstatsmenu() {
        document.getElementById("menu7").style.visibility = "visible";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function closenameinput() {
        let name = document.getElementById("nameinput").value

        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }

        if (name == "") {
            document.getElementById("nameinput").placeholder = "Can't be empty!"
        } else {
            nameofbusiness = name
            document.getElementById("menu6").style.visibility = "hidden";
        }
    }

    function selectcobble() {
        document.getElementById("currcase").innerHTML = "Cobblestone"
        document.getElementById("caseprice").innerHTML = "1515.42"
        document.getElementById("keyprice").innerHTML = "0"
        document.getElementById("caseimg").src = "./img/Cobblestone/cobblestone.png"
    }

    function selectrecoil() {
        document.getElementById("currcase").innerHTML = "Recoil Case"
        document.getElementById("caseprice").innerHTML = "1.28"
        document.getElementById("keyprice").innerHTML = "2.20"
        document.getElementById("caseimg").src = "./img/Recoil/case1.png"
    }

    function selectbravo() {
        document.getElementById("currcase").innerHTML = "Bravo Case"
        document.getElementById("caseprice").innerHTML = "49.32"
        document.getElementById("keyprice").innerHTML = "2.20"
        document.getElementById("caseimg").src = "./img/Bravo/bravo_case.png"
    }

    function opencasesmenu() {
        document.getElementById("menu4").style.visibility = "visible";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function iunderstand() {
        document.getElementById("menu5").style.visibility = "hidden";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function closecasesmenu() {
        document.getElementById("menu4").style.visibility = "hidden";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function upgradetf() {
        let currMoney = document.getElementById("money").innerHTML
        if (currMoney > triggerfingerprice) {
            var audio = new Audio('upgrade.mp3');
            audio.volume = 0.2;
            audio.play();
            let sum = currMoney - triggerfingerprice
            document.getElementById("money").innerHTML = `${(Math.round(sum * 100))/ 100}`
            triggerfingerprice = triggerfingerprice * 3.0
            triggerfinger = triggerfinger * 1.5
            let sum3 = triggerfinger * 1.5
        document.getElementById("triggerfingervalue").innerHTML = `Trigger Finger ($${(Math.round(triggerfinger * 100))/ 100} > $${(Math.round(sum3 * 100))/ 100} P.Sec)`
            document.getElementById("upgrade2").textContent = `UPGRADE ($${triggerfingerprice})`
        }
    }

    function toggleac() {
        let state = document.getElementById("acstate").textContent
        
        if (state == "Enabled") {
            document.getElementById("acstate").textContent = "Disabled"
            document.getElementById("acstate").style.backgroundColor = "red"
            document.getElementById("acstate").style.borderColor = "red"
        } else {
            document.getElementById("acstate").textContent = "Enabled"
            document.getElementById("acstate").style.backgroundColor = "green"
            document.getElementById("acstate").style.borderColor = "green"
        }
    }

    function togglesounds() {
        let state = document.getElementById("sestate").textContent
        
        if (state == "Enabled") {
            document.getElementById("sestate").textContent = "Disabled"
            document.getElementById("sestate").style.backgroundColor = "red"
            document.getElementById("sestate").style.borderColor = "red"
        } else {
            document.getElementById("sestate").textContent = "Enabled"
            document.getElementById("sestate").style.backgroundColor = "green"
            document.getElementById("sestate").style.borderColor = "green"
        }
    }

    function upgradeac() {
        let currMoney = document.getElementById("money").innerHTML
        if (currMoney > autoclickprice) {
            var audio = new Audio('upgrade.mp3');
            audio.volume = 0.2;
            audio.play();
            let sum = currMoney - autoclickprice
            document.getElementById("money").innerHTML = `${(Math.round(sum * 100))/ 100}`
            autoclickprice = autoclickprice * 3
            autoclicker = autoclicker * 2
            document.getElementById("autoclickervalue").innerHTML = `Teammate ($${autoclicker} > $${autoclicker * 2} P.Sec)`
            document.getElementById("upgrade1").textContent = `UPGRADE ($${autoclickprice})`
        }
    }

    function closesettings() {
        document.getElementById("menu1").style.visibility = "hidden";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function opensettings() {
        document.getElementById("menu1").style.visibility = "visible";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function closeupgrades() {
        document.getElementById("menu3").style.visibility = "hidden";
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function openupgrades() {
        document.getElementById("autoclickervalue").innerHTML = `Teammate ($${autoclicker} > $${autoclicker * 2} P.Sec)`
        document.getElementById("upgrade1").textContent = `UPGRADE ($${autoclickprice})`
        let sum1 = triggerfinger * 1.5
        document.getElementById("triggerfingervalue").innerHTML = `Trigger Finger ($${(Math.round(triggerfinger * 100))/ 100} > $${(Math.round(sum1 * 100))/ 100} P.Sec)`
        document.getElementById("upgrade2").textContent = `UPGRADE ($${triggerfingerprice})`

        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }

        document.getElementById("menu3").style.visibility = "visible";
    }

    function togglepopup() {
        let state = document.getElementById("popupstate").textContent
        
        if (state == "Enabled") {
            document.getElementById("popupstate").textContent = "Disabled"
            document.getElementById("popupstate").style.backgroundColor = "red"
            document.getElementById("popupstate").style.borderColor = "red"
        } else {
            document.getElementById("popupstate").textContent = "Enabled"
            document.getElementById("popupstate").style.backgroundColor = "green"
            document.getElementById("popupstate").style.borderColor = "green"
        }
    }

    function closemenu() {
        document.getElementById("menu").style.visibility = "hidden";

        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('click.mp3');
                audio.volume = 0.4;
                audio.play();
            }
    }

    function shoot() {
        shotsfired ++;

        let ranum = Math.floor(Math.random() * (+10 - 1)) + 1;
        let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('ak.mp3');
                audio.volume = 0.1;
                audio.play();
            }
        var multi = 1

        if (ranum == 4) {
            headshots ++;
            document.getElementById("headshotsstats").innerHTML = `Headshots: ${headshots}.`
            let state = document.getElementById("sestate").textContent
            if (state == "Enabled") {
                var audio = new Audio('hs.mp3');
                audio.volume = 0.1;
                audio.play();
            }
            multi = 2
        }

        let currMoney = document.getElementById("money").innerHTML
        let sumFL = parseFloat(currMoney)

        let newsum1 = sumFL + triggerfinger * multi
        document.getElementById("money").innerHTML = `${(Math.round(newsum1 * 100))/ 100}`
    }
    
    function reply_click(clicked) {
        let itemsoldvalue = document.getElementById(clicked).textContent
        let removedlr = itemsoldvalue.replace("$", "")
        let currMoney = document.getElementById("money").innerHTML
        
        let itemSoldValueINT = parseFloat(removedlr)
        let currMoney1INT = parseFloat(currMoney)

        let sum = itemSoldValueINT + currMoney1INT

        document.getElementById("money").innerHTML = `${(Math.round(sum * 100))/ 100}`

        document.getElementById(clicked).parentElement.remove();
    }


    var idforbutton = 0

    function open123() {

        let currMoney = document.getElementById("money").innerHTML
        let sumFL = parseFloat(currMoney)

        let cprice = parseFloat(document.getElementById("caseprice").innerHTML)
        let kprice = parseFloat(document.getElementById("keyprice").innerHTML)
        let minusamount = cprice + kprice

        // DROP RATES //
        let blueL = -5
        let blueH = 150

        let purpleL = 150
        let purpleH = 180

        let pinkL = 180
        let pinkH = 190

        let redL = 190
        let redH = 195

        let goldL = 195
        let goldH = 205
        
        if (sumFL > minusamount) {
            let newsum = currMoney - minusamount
            
            casesopened ++;

            document.getElementById("money").innerHTML = `${(Math.round(newsum * 100))/ 100}`
            
            let ranum = Math.floor(Math.random() * (+201 - 1)) + 1;

            let case12 = document.getElementById("currcase").innerHTML
            let case12name = case12.split(" ")
            
            if (ranum > blueL && ranum < blueH) {
                window[`${case12name[0]}Blue`]();
            }

            if (ranum > purpleL && ranum < purpleH) {
                window[`${case12name[0]}Purple`]();
            }

            if (ranum > pinkL && ranum < pinkH) {
                window[`${case12name[0]}Pink`]();
            }

            if (ranum > redL && ranum < redH) {
                window[`${case12name[0]}Red`]();
            }

            if (ranum > goldL && ranum < goldH) {
                window[`${case12name[0]}Gold`]();
            }

        } else {
            let state = document.getElementById("popupstate").textContent
        
            if (state == "Enabled") {
                document.getElementById("menu5").style.visibility = "visible";
            }
        }

    }

    var timer = setInterval(myTimer, 1000);

    function myTimer(){

        
        playtime ++;
        document.getElementById("casesopened").innerHTML = `Cases Opened: ${casesopened}`
        document.getElementById("usernametextstats").innerHTML = `Username: ${nameofbusiness}.`
        document.getElementById("playtimetextstats").innerHTML = `Playtime: ${playtime} seconds.`
        document.getElementById("headshotsstats").innerHTML = `Headshots: ${headshots}.`
        document.getElementById("timesshotstats").innerHTML = `Shots fired: ${shotsfired}.`
        
        let state = document.getElementById("acstate").textContent
        
        if (state == "Enabled") {
            let currMoney = document.getElementById("money").innerHTML
            let currMoneyFL = parseFloat(currMoney)
            let autoclickerFL = parseFloat(autoclicker)
            let sum = currMoneyFL + autoclickerFL
            document.getElementById("money").innerHTML = `${(Math.round(sum * 100))/ 100}`
        }
    }