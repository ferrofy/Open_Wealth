const BTC_Amt = document.getElementById("BTC")
const Gold_Amt = document.getElementById("Gold")
const Assets_Bar = document.querySelector(".Assets_Bar")
const Assets_Text = document.getElementById("Assets_Text")
const Asset_List_BTC = document.getElementById("Asset_List_BTC")
const Asset_List_Gold = document.getElementById("Asset_List_Gold")
const Assets_Total = document.getElementById("Assets_Total")

BTC_Bal = { GoSats: 1258 }
const Gold_Bal = { GoSats: 5.92, Paytm: 0.6 }

let Total_BTC = 0
let Total_Gold = 0

for (const App in Gold_Bal) {
    Total_Gold += Number((Gold_Bal[App] / 1000).toFixed(5))
}

for (const App in BTC_Bal) {
    Total_BTC += Number((BTC_Bal[App] / 100000000).toFixed(8))
}

const Gold_Market_Price = 20000
const BTC_Market_Price = 10000000

const Gold_In_Rs = Number((Total_Gold * Gold_Market_Price).toFixed(2))
const BTC_In_Rs = Number((Total_BTC * BTC_Market_Price).toFixed(2))
const Total_Rs = BTC_In_Rs + Gold_In_Rs

let BTC_Precentage = 0

if (Total_Rs > 0) {
    BTC_Precentage = Number(((BTC_In_Rs / Total_Rs) * 100).toFixed(2))
}

Assets_Bar.style.background = `conic-gradient(var(--Bitcoin) 0% ${BTC_Precentage}%, var(--Gold) ${BTC_Precentage}% 100%)`

Assets_Text.innerHTML = `BTC: ${BTC_Precentage}% <br><br> Gold: ${100 - BTC_Precentage}%`
BTC_Amt.innerHTML = `Total Amount: ${Total_BTC}`
Gold_Amt.innerHTML = `Total Amount: ${Total_Gold} g`
Asset_List_BTC.innerHTML = `<div class="BTC_Asset_Box"></div> BTC ~ ₹ ${BTC_In_Rs}`
Asset_List_Gold.innerHTML = `<div class="Gold_Asset_Box"></div> Gold ~ ₹ ${Gold_In_Rs}`
Assets_Total.innerHTML = `Total ~ ₹ ${Total_Rs}`
