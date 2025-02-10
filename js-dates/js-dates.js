function calculate(){
    let startInput = document.getElementById("start").value;
    let endInput = document.getElementById("end").value;

    let start = new Date(startInput);
    let end = new Date(endInput);

    if(start>end){
        return alert("Start date must be less than the End date!");
    }

    let startYear = start.getFullYear();
    let startMonth = start.getMonth();
    let startDay = start.getDate();
    
    let endYear = end.getFullYear();
    let endMonth = end.getMonth();
    let endDay = end.getDate();

    let years = endYear - startYear;
    let months = endMonth - startMonth;
    let days = endDay - startDay;

    if(days < 0){
        let days = days + new Date(endYear,endMonth,0).getDate();
        months--;
    }
    if(months<0){
        months += 12;
        years--;
    }

    document.getElementById("result").innerText = `${years} Years,${months}Months,${days} Days`;
}