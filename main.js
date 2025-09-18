const currency = "EUR";
const exact_date = "10.09.2024";

const baseURL = "https://bank.gov.ua/NBU_ovdp";
const url = new URL(baseURL);

url.searchParams.append("date", exact_date);
url.searchParams.append("val_code", currency);
const finalUrl = url.toString() + "&json";


console.log(finalUrl);
