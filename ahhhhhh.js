var lvl = "21"; // level uwu
var moni = 125; // dabloons
var str; // strength for melee weapons
var hp; // current health
var mh; // max health
var mgc; // magic for like magic, you know
var ris; // resistance?
var named = "Greg"; // can't change to name, JS spaghetti
var gs; // game state
var loc; // location

function asciiIfi(asc) {
	if (typeof asc === "number") {
		asc = asc.toString();
	} else if (typeof asc === "undefined" || typeof asc === "boolean") {
		asc = "0";
	}
	var leng = asc.length;
	let final = "";
	for (let i = 0; i < leng; i++) {
		final += asc.charCodeAt(i);
	}
	return final;
}
/*
Fix load function
rn it splits to an array maybe use that to get the substrings?
figure out a way to sperate each charcode
*/
     function load(saveString) {
        const Load1 = saveString.split("-");
        for (let i = 0; i < saveString.length(); i++) {
            let substring = Load1[i]
            for	(let h = 0; h<){
                console.log(String.fromCharCode(subtring.fromCharCode(h,i)))
            }
        }
    }
function load(saveString) {
	const Load1 = saveString.split("-");
	for (let i = 0; i < saveString.length; i+=2) {
        let substring = Load1[i]
	    for	(let h = 0; h<substring.length;h+=2){
		    console.log(String.fromCharCode(substring.charAt(h)))
        }
	}
}
function save() {
	var saveLevel = asciiIfi(lvl);
	var saveMoney = asciiIfi(moni);
	var saveName = nameSav();
	var saveLocation = asciiIfi(loc);
	var saveResistence = asciiIfi(ris);
	var saveString = saveLevel + "-" + saveMoney + "-" + saveName + "-" + saveLocation + "-" + saveResistence;
	return saveString;
}
save();
