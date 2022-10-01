function RecoilBlue() {
    var items = [
        "Glock-18 | Winterized^./img/Recoil/glock18_winterized^0.47^#4b69ff",
        "M4A4 | Poly Mag^./img/Recoil/m4a4_poly_mag^0.93^#4b69ff",
        "FAMAS | Meow 36^./img/Recoil/famas_meow_36^0.63^#4b69ff",
        "MAC-10 | Monkeyflage^./img/Recoil/mac10_monkeyflage^0.32^#4b69ff",
        "Galil AR | Destroyer^./img/Recoil/galilar_destroyer^0.42^#4b69ff",
        "UMP-45 | Roadblock^./img/Recoil/ump45_roadblock^0.23^#4b69ff",
        "Negev | Drop Me^./img/Recoil/negev_drop_me^0.42^#4b69ff"
    ]


    idforbutton += 1
    var randomitem = items[Math.floor(Math.random() * items.length)];
    let iteminfo = randomitem.split("^")
    let curritems = document.getElementById("itemstext").innerHTML;

    let state = document.getElementById("popupstate").textContent
        
    if (state == "Enabled") {
        document.getElementById("newitemname").textContent = `${iteminfo[0]}`
        document.getElementById("newitemimg").src = `${iteminfo[1]}.png`
        document.getElementById("weaponwin").style.borderColor = `${iteminfo[3]}`
    
        let state = document.getElementById("sestate").textContent
        if (state == "Enabled") {
            var audio = new Audio('unbox.mp3');
                audio.volume = 0.6;
                audio.play();
        }
    
        document.getElementById("menu").style.visibility = "visible";
    }


    document.getElementById("itemstext").innerHTML = `${curritems}<div id=""class="itembg" style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' class="clearbutton" onClick="reply_click(this.id)"><img draggable="false" src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function RecoilPurple() {
    var items = [
        "Dual Berettas | Flora Carnivora^./img/Recoil/db_flora_carnivora^3.20^#8847ff",
        "SG 553 | Dragon Tech^./img/Recoil/sg553_dragon_tech^3.20^#8847ff",
        "R8 Revolver | Crazy 8^./img/Recoil/r8_crazy_8^3.80^#8847ff",
        "P90 | Vent Rush^./img/Recoil/p90_vent_rush^2.93^#8847ff",
        "M249 | Downtown^./img/Recoil/m249_downtown^2.53^#8847ff",
    ]


    idforbutton += 1
    var randomitem = items[Math.floor(Math.random() * items.length)];
    let iteminfo = randomitem.split("^")
    let curritems = document.getElementById("itemstext").innerHTML;
    
    let state = document.getElementById("popupstate").textContent
        
    if (state == "Enabled") {
        document.getElementById("newitemname").textContent = `${iteminfo[0]}`
        document.getElementById("newitemimg").src = `${iteminfo[1]}.png`
        document.getElementById("weaponwin").style.borderColor = `${iteminfo[3]}`
    
        let state = document.getElementById("sestate").textContent
        if (state == "Enabled") {
            var audio = new Audio('unbox.mp3');
                audio.volume = 0.6;
                audio.play();
        }
        document.getElementById("menu").style.visibility = "visible";
    }
    document.getElementById("itemstext").innerHTML = `${curritems}<div id=""class="itembg" style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' class="clearbutton" onClick="reply_click(this.id)"><img draggable="false" src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function RecoilPink() {
    var items = [
        "AK-47 | Ice Coaled^./img/Recoil/ak47_ice_coaled^50.42^#d32ee6",
        "P250 | Visions^./img/Recoil/p250_visions^14.64^#d32ee6",
        "Sawed-Off | Kiss♥Love^./img/Recoil/sawed_off_kiss_love^17.13^#d32ee6",
    ]


    idforbutton += 1
    var randomitem = items[Math.floor(Math.random() * items.length)];
    let iteminfo = randomitem.split("^")
    let curritems = document.getElementById("itemstext").innerHTML;
    let state = document.getElementById("popupstate").textContent
        
    if (state == "Enabled") {
        document.getElementById("newitemname").textContent = `${iteminfo[0]}`
        document.getElementById("newitemimg").src = `${iteminfo[1]}.png`
        document.getElementById("weaponwin").style.borderColor = `${iteminfo[3]}`
    
        let state = document.getElementById("sestate").textContent
        if (state == "Enabled") {
            var audio = new Audio('unbox.mp3');
                audio.volume = 0.6;
                audio.play();
        }
        document.getElementById("menu").style.visibility = "visible";
    }
    document.getElementById("itemstext").innerHTML = `${curritems}<div id=""class="itembg" style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' class="clearbutton" onClick="reply_click(this.id)"><img draggable="false" src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function RecoilRed() {
    var items = [
        "USP-S | Printstream^./img/Recoil/usp_printstream^160.43^#eb4b4b",
        "AWP | Chromatic Aberration^./img/Recoil/awp_chromatic_aberration^63.74^#eb4b4b",
    ]


    idforbutton += 1
    var randomitem = items[Math.floor(Math.random() * items.length)];
    let iteminfo = randomitem.split("^")
    let curritems = document.getElementById("itemstext").innerHTML;
    
    let state = document.getElementById("popupstate").textContent
        
    if (state == "Enabled") {
        document.getElementById("newitemname").textContent = `${iteminfo[0]}`
        document.getElementById("newitemimg").src = `${iteminfo[1]}.png`
        document.getElementById("weaponwin").style.borderColor = `${iteminfo[3]}`
    
        let state = document.getElementById("sestate").textContent
        if (state == "Enabled") {
            var audio = new Audio('unbox.mp3');
                audio.volume = 0.6;
                audio.play();
        }
        document.getElementById("menu").style.visibility = "visible";
    }
    document.getElementById("itemstext").innerHTML = `${curritems}<div id=""class="itembg" style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' class="clearbutton" onClick="reply_click(this.id)"><img draggable="false" src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}