const Crypto_Amt = document.getElementById("Crypto")
const Gold_Amt = document.getElementById("Gold")
const Silver_Amt = document.getElementById("Silver")
const Stocks_Amt = document.getElementById("Stocks")
const FD_Amt = document.getElementById("FD")

const Asset_List_Crypto = document.getElementById("Asset_List_Crypto")
const Asset_List_Gold = document.getElementById("Asset_List_Gold")
const Asset_List_Silver = document.getElementById("Asset_List_Silver")
const Asset_List_Stocks = document.getElementById("Asset_List_Stocks")
const Asset_List_FD = document.getElementById("Asset_List_FD")

const Assets_Bar = document.querySelector(".Assets_Bar")
const Assets_Text = document.getElementById("Assets_Text")
const Assets_Total = document.getElementById("Assets_Total")

let k = 1000
let Cr = 10000000

const BTC_Expected_Market_Price = Cr
const Gold_Expected_Market_Price = 20 * k
const Silver_Expected_Market_Price = 300
const Stocks_Expected_Market_Price = 0
const FD_Expected_Market_Price = 0

fetch("../Data/Balance.json").then(Response => Response.json())
    .then(Balance => {
        const BTC = Object.values(Balance.Crypto.BTC).reduce((Sum, Val) => Sum + Val, 0);
        const Gold = Object.values(Balance.Gold).reduce((Sum, Val) => Sum + Val, 0);
        const Silver = Object.values(Balance.Silver).reduce((Sum, Val) => Sum + Val, 0);
        const Stocks = Object.values(Balance.Stocks).reduce((Sum, Val) => Sum + Val, 0);
        const FD = Object.values(Balance.FD).reduce((Sum, Val) => Sum + Val, 0);

        let Total_Crypto = BTC / (10 * Cr) // Sats
        let Total_Gold = Gold / k // Gram
        let Total_Silver = Silver // Gram
        let Total_Stocks = Stocks
        let Total_FD = FD


        const Crypto_In_Rs = Number((Total_Crypto * BTC_Expected_Market_Price).toFixed(2))
        const Gold_In_Rs = Number((Total_Gold * Gold_Expected_Market_Price).toFixed(2))
        const Silver_In_Rs = Number((Total_Silver * Silver_Expected_Market_Price).toFixed(2))
        const Stocks_In_Rs = Number((Total_Stocks * Stocks_Expected_Market_Price).toFixed(2))
        const FD_In_Rs = Number((Total_FD * FD_Expected_Market_Price).toFixed(2))
        const Total_Rs = Number((Crypto_In_Rs + Gold_In_Rs + Silver_In_Rs + Stocks_In_Rs + FD_In_Rs).toFixed(2))

        let Crypto_Precentage = Number(((Crypto_In_Rs / Total_Rs) * 100).toFixed(2))
        let Gold_Precentage = Number(((Gold_In_Rs / Total_Rs) * 100).toFixed(2))
        let Silver_Precentage = Number(((Silver_In_Rs / Total_Rs) * 100).toFixed(2))
        let Stocks_Precentage = Number(((Stocks_In_Rs / Total_Rs) * 100).toFixed(2))
        let FD_Precentage = Number(((FD_In_Rs / Total_Rs) * 100).toFixed(2))

        let Total_Precentage = 0;

        Assets_Bar.style.background = `conic-gradient(
            var(--Bitcoin) 0% ${Total_Precentage += Crypto_Precentage}%,
    var(--Gold) ${Total_Precentage}% ${Total_Precentage += Gold_Precentage}%,
    var(--Silver) ${Total_Precentage}% ${Total_Precentage += Silver_Precentage}%,
    var(--Stocks) ${Total_Precentage}% ${Total_Precentage += Stocks_Precentage}%,
    var(--FD) ${Total_Precentage}% 100%
    )`

        Assets_Text.innerHTML = `Crypto: ${Crypto_Precentage}% <br><br> Gold: ${Gold_Precentage}% <br><br> Silver: ${Silver_Precentage}% <br><br> Stocks: ${Stocks_Precentage}% <br><br> FD: ${FD_Precentage}%`

        Crypto_Amt.innerHTML = `Total Amount: ${Number((Total_Crypto).toFixed(8))}`
        Gold_Amt.innerHTML = `Total Amount: ${Number((Total_Gold).toFixed(5))} g`
        Silver_Amt.innerHTML = `Total Amount: ${Number((Total_Silver).toFixed(4))} g`
        Stocks_Amt.innerHTML = `Total Amount: ${Number((Total_Stocks).toFixed(2))}`
        FD_Amt.innerHTML = `Total Amount: ${Number((Total_FD).toFixed(2))}`

        Asset_List_Crypto.innerHTML = `<div class="Crypto_Asset_Box"></div> Crypto ~ ₹ ${Crypto_In_Rs}`
        Asset_List_Gold.innerHTML = `<div class="Gold_Asset_Box"></div> Gold ~ ₹ ${Gold_In_Rs}`
        Asset_List_Silver.innerHTML = `<div class="Silver_Asset_Box"></div> Silver ~ ₹ ${Silver_In_Rs}`
        Asset_List_Stocks.innerHTML = `<div class="Stocks_Asset_Box"></div> Stocks ~ ₹ ${Stocks_In_Rs}`
        Asset_List_FD.innerHTML = `<div class="FD_Asset_Box"></div> FD ~ ₹ ${FD_In_Rs}`

        Assets_Total.innerHTML = `Total ~ ₹ ${Total_Rs}`
    });