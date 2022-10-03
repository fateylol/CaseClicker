function BravoBlue() {
    var items = [
        "G3SG1 | Demeter^./img/Bravo/g3sg1_demeter^6.74^#4b69ff",
        "Galil AR | Shattered^./img/Bravo/galil_ar_shattered^9.32^#4b69ff",
        "SG 553 | Wave Spray^./img/Bravo/sg553_wave_spray^10.53^#4b69ff",
        "Nova | Tempest^./img/Bravo/nova_tempest^7.23^#4b69ff",
        "UMP-45 | Bone Pile^./img/Bravo/ump_45_bone_pile^11.74^#4b69ff",
        "Dual Berettas | Black Limba^./img/Bravo/db_black_limba^6.64^#4b69ff"
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


    document.getElementById("itemstext").innerHTML = `${curritems}<div class="itembg" title='${iteminfo[0]}'  style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' onmouseover="itemhover(this)" onmouseleave="exithover(this)" class="clearbutton5" onClick="reply_click(this.id)"><img draggable="false" class="hovermenu"  src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function BravoPurple() {
    var items = [
        "P90 | Emerald Dragon^./img/Bravo/p90_emerald_dragon^200.53^#8847ff",
        "USP-S | Overgrowth^./img/Bravo/usps_overgrowth^60.52^#8847ff",
        "M4A1-S | Bright Water^./img/Bravo/m4a1s_bright_water^32.42^#8847ff",
        "M4A4 | Zirka^./img/Bravo/m4a4_zirka^45.34^#8847ff",
        "MAC-10 | Graven^./img/Bravo/mac-10_graven^30.53^#8847ff",
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
    document.getElementById("itemstext").innerHTML = `${curritems}<div class="itembg" title='${iteminfo[0]}'  style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}'onmouseover="itemhover(this)" onmouseleave="exithover(this)" class="clearbutton5" onClick="reply_click(this.id)"><img draggable="false" class="hovermenu"  src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function BravoPink() {
    var items = [
        "P2000 | Ocean Foam^./img/Bravo/p2000_ocean_foam^150.43^#d32ee6",
        "AWP | Graphite^./img/Bravo/awp_graphite^196.64^#d32ee6",
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
    document.getElementById("itemstext").innerHTML = `${curritems}<div class="itembg" title='${iteminfo[0]}'  style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' onmouseover="itemhover(this)"onmouseleave="exithover(this)" class="clearbutton5" onClick="reply_click(this.id)"><img draggable="false" class="hovermenu"  src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function BravoRed() {
    var items = [
        "Desert Eagle | Golden Koi^./img/Bravo/deagle_golden_koi^38.42^#eb4b4b",
        "AK-47 | Fire Serpent^./img/Bravo/ak_47_fire_serpent^2474.53^#eb4b4b",
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
    document.getElementById("itemstext").innerHTML = `${curritems}<div class="itembg" title='${iteminfo[0]}'  style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' onmouseover="itemhover(this)"onmouseleave="exithover(this)" class="clearbutton5" onClick="reply_click(this.id)"><img draggable="false" class="hovermenu"  src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}

function BravoGold() {
    var items = [
        "Bayonet | Fade^./img/Bravo/bayonet_fade^854.53^#caab05",
        "Bayonet | Vanilla^./img/Bravo/bayonet_vanilla^730.43^#caab05",
        "Bayonet | Slaughter^./img/Bravo/bayonet_slaughter^564.32^#caab05",
        "Bayonet | Night^./img/Bravo/bayonet_night^245.32^#caab05",
        "Flip Knife | Case Hardened^./img/Bravo/flip_knife_case_hardened^1432.43^#caab05",
        "Flip Knife | Fade^./img/Bravo/flip_knife_fade^601.43^#caab05",
        "Gut Knife | Slaughter^./img/Bravo/gut_knife_slaughter^150.32^#caab05",
        "Karambit | Slaughter^./img/Bravo/karambit_slaughter^1002.52^#caab05",
        "Karambit | Stained^./img/Bravo/karambit_stained^551.43^#caab05",
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
    document.getElementById("itemstext").innerHTML = `${curritems}<div class="itembg" title='${iteminfo[0]}'  style="border-style: solid;border-color:${iteminfo[3]};"><button id='${idforbutton}' onmouseover="itemhover(this)"onmouseleave="exithover(this)" class="clearbutton5" onClick="reply_click(this.id)"><img draggable="false" src=${iteminfo[1]}.png style='height:50px; width:50px;'>$${iteminfo[2]}</button></div>`;
}