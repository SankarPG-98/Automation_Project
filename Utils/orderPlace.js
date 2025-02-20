const base = require("@playwright/test")

exports.customTest=base.test.extend(
    {

     testDataOrder : { 
            "url"           : "https://rahulshettyacademy.com/client",
            "emailId"       : "sankarpg@gmail.com",
            "password"      : "102030@sS",
            "productName"   : "IPHONE 13 PRO",
            "country"       : " India",
            "postCode"      : "4444 6667 8899"
    }
}

)