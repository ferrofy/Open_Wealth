const BTC_Amt = document.getElementById("BTC")
const Gold_Amt = document.getElementById("Gold")
const Silver_Amt = document.getElementById("Silver")
const Stocks_Amt = document.getElementById("Stocks")
const FD_Amt = document.getElementById("FD")

const Asset_List_BTC = document.getElementById("Asset_List_BTC")
const Asset_List_Gold = document.getElementById("Asset_List_Gold")
const Asset_List_Silver = document.getElementById("Asset_List_Silver")
const Asset_List_Stocks = document.getElementById("Asset_List_Stocks")
const Asset_List_FD = document.getElementById("Asset_List_FD")

const Assets_Bar = document.querySelector(".Assets_Bar")
const Assets_Text = document.getElementById("Assets_Text")

const Assets_Total = document.getElementById("Assets_Total")

const BTC_Bal = { GoSats: 1398 }
const Gold_Bal = { GoSats: 5.92, Paytm: 0.6 }
const Silver_Bal = { Paytm: 0 }
const Stocks_Bal = {}
const FD_Bal = {}

// Expected Price For Future , This Price May Reach In Next 10 Years
const BTC_Market_Price = 10000000 // Per BTC
const Gold_Market_Price = 20000 // Per Gram
const Silver_Market_Price = 300 // Per Gram
const Stocks_Market_Price = 0 // Per Stock
const FD_Market_Price = 0 // Depends On Intreast Rate


let [Total_BTC, Total_Gold, Total_Silver, Total_Stocks, Total_FD] = [0, 0, 0, 0, 0];

for (const App in Gold_Bal) {
    Total_Gold += Number((Gold_Bal[App] / 1000).toFixed(5)) // For Gram
}

for (const App in BTC_Bal) {
    Total_BTC += Number((BTC_Bal[App] / 100000000).toFixed(8)) // For Exact BTC
}

for (const App in Silver_Bal) {
    Total_Silver += Number((Silver_Bal[App]).toFixed(8)) // For Gram
}

for (const App in Stocks_Bal) {
    Total_Stocks += Number((Stocks_Bal[App]).toFixed(8)) // Exact Val
}

for (const App in FD_Bal) {
    Total_FD += Number((FD_Bal[App]).toFixed(8)) // Exact Val
}

const BTC_In_Rs = Number((Total_BTC * BTC_Market_Price).toFixed(2))
const Gold_In_Rs = Number((Total_Gold * Gold_Market_Price).toFixed(2))
const Silver_In_Rs = Number((Total_Silver * Silver_Market_Price).toFixed(2))
const Stocks_In_Rs = Number((Total_Stocks * Stocks_Market_Price).toFixed(2))
const FD_In_Rs = Number((Total_FD * FD_Market_Price).toFixed(2))
const Total_Rs = Number((BTC_In_Rs + Gold_In_Rs + Silver_In_Rs + Stocks_In_Rs + FD_In_Rs).toFixed(2))

let BTC_Precentage = Number(((BTC_In_Rs / Total_Rs) * 100).toFixed(2))
let Gold_Precentage = Number(((Gold_In_Rs / Total_Rs) * 100).toFixed(2))
let Silver_Precentage = Number(((Silver_In_Rs / Total_Rs) * 100).toFixed(2))
let Stocks_Precentage = Number(((Stocks_In_Rs / Total_Rs) * 100).toFixed(2))
let FD_Precentage = Number(((FD_In_Rs / Total_Rs) * 100).toFixed(2))

let Total_Precentage = 0;

Assets_Bar.style.background = `conic-gradient(
    var(--Bitcoin) 0% ${Total_Precentage += BTC_Precentage}%,
    var(--Gold) ${Total_Precentage}% ${Total_Precentage += Gold_Precentage}%,
    var(--Silver) ${Total_Precentage}% ${Total_Precentage += Silver_Precentage}%,
    var(--Stocks) ${Total_Precentage}% ${Total_Precentage += Stocks_Precentage}%,
    var(--FD) ${Total_Precentage}% 100%
)`

Assets_Text.innerHTML = `BTC: ${BTC_Precentage}% <br><br> Gold: ${Gold_Precentage}% <br><br> Silver: ${Silver_Precentage}% <br><br> Stocks: ${Stocks_Precentage}% <br><br> FD: ${FD_Precentage}%`

BTC_Amt.innerHTML = `Total Amount: ${Total_BTC}`
Gold_Amt.innerHTML = `Total Amount: ${Total_Gold} g`
Silver_Amt.innerHTML = `Total Amount: ${Total_Silver} g`
Stocks_Amt.innerHTML = `Total Amount: ${Total_Stocks}`
FD_Amt.innerHTML = `Total Amount: ${Total_FD}`

Asset_List_BTC.innerHTML = `<div class="BTC_Asset_Box"></div> BTC ~ ₹ ${BTC_In_Rs}`
Asset_List_Gold.innerHTML = `<div class="Gold_Asset_Box"></div> Gold ~ ₹ ${Gold_In_Rs}`
Asset_List_Silver.innerHTML = `<div class="Silver_Asset_Box"></div> Silver ~ ₹ ${Silver_In_Rs}`
Asset_List_Stocks.innerHTML = `<div class="Stocks_Asset_Box"></div> Stocks ~ ₹ ${Stocks_In_Rs}`
Asset_List_FD.innerHTML = `<div class="FD_Asset_Box"></div> FD ~ ₹ ${FD_In_Rs}`

Assets_Total.innerHTML = `Total ~ ₹ ${Total_Rs}`