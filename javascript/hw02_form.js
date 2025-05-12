document.getElementById("name").addEventListener("blur", checkName);
document.getElementById("pwd").addEventListener("blur", checkPwd);
document.getElementById("date").addEventListener("blur", checkDate);

function checkName(){
    let nameValue = document.getElementById("name").value;
    let nameLen = nameValue.length;
    let nameSp = document.getElementById("nameSp");
    let nameCheck = false;

    if(nameValue == "")
        nameSp.innerHTML = "❌&nbsp;請輸入姓名！";
    else if(nameLen < 2)
        nameSp.innerHTML = "❌&nbsp;請輸入至少兩個字！";
    else{
        for(let i = 0; i < nameLen; i++){
            let chValue = nameValue.charCodeAt(i);
            if(chValue >= 0x4E00 && chValue <= 0x9FFF){
                if(i == nameLen-1)
                    nameCheck = true;    
            }
            else{
                nameSp.innerHTML = "❌&nbsp;請全部都輸入中文字！";
                break;
            }
        }
        if(nameCheck == true)
            nameSp.innerHTML = `<span class=\"check\" id=\"nameSp\">✅&nbsp;姓名格式正確</span>`;
    }
}

function checkPwd(){
    let pwdValue = document.getElementById("pwd").value;
    let pwdLen = pwdValue.length;
    let pwdSp = document.getElementById("pwdSp");
    let pwdArr = ["!", "@", "#", "$", "%", "^", "&", "*"];
    let pwdCheck1 = false, pwdCheck2 = false, pwdCheck3 = false;

    if(pwdValue == "")
        pwdSp.innerHTML = "❌&nbsp;請輸入密碼！";
    else if(pwdLen >= 6){
        for(let i = 0; i < pwdLen; i++){
            let chPwd = pwdValue.charAt(i).toUpperCase();
            if(chPwd >= 'A' && chPwd <= 'Z' )
                pwdCheck1 = true;
            else if(chPwd >= 0 && chPwd <= 9)
                pwdCheck2 = true;
            if(pwdCheck1 == true && pwdCheck2 == true)
                break;
        }
        for(let i of pwdValue)
            for(let j of pwdArr)
                if(i === j){
                    pwdCheck3 = true;
                    break;
                }
        if(pwdCheck1 == true && pwdCheck2 == true && pwdCheck3 == true)
            pwdSp.innerHTML = `<span class=\"check\" id=\"pwdSp\">✅&nbsp;密碼格式正確</span>`;
        else
            pwdSp.innerHTML ="❌&nbsp;密碼必須包含英數字及特殊字元！";
    }
    else
        pwdSp.innerHTML = "❌&nbsp;密碼需至少&nbsp;6&nbsp;個字！";
}

function checkDate(){
    let dateValue = document.getElementById("date").value;
    let dateSp = document.getElementById("dateSp");
    let myDate = new Date(dateValue);
    let dateArr = dateValue.split("/");
    let dateCheck = new Date(dateArr[0],dateArr[1]-1,dateArr[2]);
    let checkYear = dateCheck.getFullYear();
    let checkMonth = dateCheck.getMonth();
    let checkDate = dateCheck.getDate();

    if(myDate.toString() === "Invalid Date")
        dateSp.innerHTML = "❌&nbsp;請輸入有效日期！";
    if(checkYear == dateArr[0] && checkMonth == dateArr[1]-1 && checkDate == dateArr[2])
        dateSp.innerHTML = `<span class=\"check\" id=\"dateSp\">✅&nbsp;日期格式正確</span>`;
    else
        dateSp.innerHTML = "❌&nbsp;請輸入有效日期！";
}