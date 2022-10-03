function CobblestoneBlue() {
    var items = [
        "Dual Berettas | Briar^./img/Cobblestone/db_briar^0.23^#b0c3d9",
        "SCAR-20 | Storm^./img/Cobblestone/scar-20_storm^0.32^#b0c3d9",
        "P90 | Storm^./img/Cobblestone/p90_storm^0.45^#b0c3d9",
        "UMP-45 | Indigo^./img/Cobblestone/ump-45_Indigo^0.45^#b0c3d9",
        "MAC-10 | Indigo^./img/Cobblestone/mac-10_indigo^0.63^#b0c3d9",
        "Nova | Green Apple^./img/Cobblestone/nova_green_apple^0.95^#5e98d9",
        "Sawed-Off | Rust Coat^./img/Cobblestone/sawed_rust_coat^1.08^#5e98d9",
        "MAG-7 | Silver^./img/Cobblestone/mag7_silver^0.95^#5e98d9",
        "USP-S | Royal Blue^./img/Cobblestone/usps_royal_blue^35.32^#5e98d9",
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

function CobblestonePurple() {
    var items = [
        "P2000 | Chainmail^./img/Cobblestone/p2000_chainmail^79.63^#4b69ff",
        "MP9 | Dark Age^./img/Cobblestone/mp9_dark_age^78.32^#4b69ff"
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

function CobblestonePink() {
    var items = [
        "Desert Eagle | Hand Cannon^./img/Cobblestone/deagle_hand_cannon^874.32^#8847ff",
        "CZ75-Auto | Chalice^./img/Cobblestone/cz75-auto_chalice^1378.23^#8847ff",
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

function CobblestoneRed() {
    var items = [
        "M4A1-S | Knight^./img/Cobblestone/m4a1s_knight^2836.35^#d32ee6",
        "AWP | Dragon Lore^./img/Cobblestone/awp_dragon_lore^10383.31^#eb4b4b",
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

function CobblestoneGold() {
    var items = [
        "M4A1-S | Knight^./img/Cobblestone/m4a1s_knight^2836.35^#d32ee6",
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