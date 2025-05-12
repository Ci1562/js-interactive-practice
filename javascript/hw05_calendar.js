let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let yy, mm, dno, dd;

year.addEventListener("change", addDay);
month.addEventListener("change", addDay);

function addDay(){
    yy = year.value;
    mm = month.value;
    dd = new Date(yy, mm, 0);
    dno = dd.getDate();

    day.innerHTML = "";
    for(let i = 1; i <= dno; i++){
        let opt = document.createElement("option");
        opt.setAttribute("value", i);
        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        day.appendChild(opt);
    }
    calendar(yy, mm);
    document.getElementById("p").innerHTML = `您選擇的日期為${yy}年${mm}月${day.value}日！`;
}

function calendar(yy, mm){
    firstDd = new Date(yy, mm-1, 1);
    let firstDayNum = firstDd.getDay();
    dd = new Date(yy, mm, 0);
    dno = dd.getDate();

    let thead = document.querySelector(".date thead");
    let tbody = document.querySelector(".date tbody");
    thead.innerHTML = "";
    tbody.innerHTML = "";

    let trHead = document.createElement("tr");
    let calArr = ["日", "一", "二", "三", "四", "五", "六"];
    for(let i = 0; i < 7; i++){
        let th = document.createElement("th");
        th.textContent = calArr[i];
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    
    var date = 1;
    for(let i = 0; i < 6; i++){
        let tr = document.createElement("tr");

        for(let j = 0; j < 7; j++){
            let td = document.createElement("td");

            if(i === 0 && j < firstDayNum)
                td.textContent = "";
            else if(date > dno)
                td.textContent = "";
            else{
                td.textContent = date;
                date++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        if(date > dno)
            break;
    }
}

for (let i = 2010; i <= 2030; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", i);
    let optTxt = document.createTextNode(i);
    opt.appendChild(optTxt);
    year.appendChild(opt);
}

for (let i = 1; i <= 12; i++) { 
    let opt = document.createElement("option");
    opt.setAttribute("value", i);
    let optTxt = document.createTextNode(i);
    opt.appendChild(optTxt);
    month.appendChild(opt);
}