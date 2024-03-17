console.log("test")


var weight = ""
var height = ""
var gender = "1"
var creat = "11"
var drug = ""
var indication = 'AF'
var dob = ""
var age = "" //insert logic here to calculate age from dob

console.log(weight)

if (age == "") {
};

//work out creatinine clearance
if (gender == "M") {
    var constant = "1.23"
} else if (gender == "F") {
    var constant = "1.04"
};
var crcl = ((140 - age) * weight * constant) / (creat);

console.log(crcl);

//all the diff dosages 

if (drugname = 'Rivaroxaban') {
    if (indication = 'AF') {
        //rivaroxaban af dosages
        if (crcl > 50) {
            var dose = 'dose as in normal renal function, Rivaroxaban 20mg daily to be taken with food'
        } else if (crcl >= 30 && crcl <= 50) {
            var dose = 'Rivaroxaban 15mg once a day'
        } else if (crcl <= 29 && crcl >= 15) {
            var dose = 'Use with caution - Rivaroxaban 15mg once a day'
        } else if (crcl <= 14) {
            var dose = 'avoid'
        } else {
            var dose = 'outside calculation peramiters for rivaroxaban'
        }
    } else if (indication = 'DVTN') {
        //rivaroxaban dvt treatment dosages
        if (crcl > 50) {
            var dose = 'dose as in normal renal function, Rivaroxaban 15mg twice a day for 21 days then 20mg once a day to be taken with food'
        } else if (crcl >= 30 && crcl <= 50) {
            var dose = 'Rivaroxaban 15mg BD for 3 weeks then 15-20mg once a day'
        } else if (crcl <= 29 && crcl >= 15) {
            var dose = 'Use with caution - Rivaroxaban 15mg twice a day for 3 weeks then 15-20mg once daily'
        } else if (crcl <= 14) {
            var dose = 'avoid'
        } else {
            var dose = 'outside calculation peramiters for rivaroxaban'
        }
    } else if (indication = 'DVTO') {
        //rivaroxaban dvt treatment dosages
        var dose = 'no specific advice'
    }
} else if (drugname = 'Edoxaban') {

}



