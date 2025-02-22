const base = require("@playwright/test")

import{test as baseTest} from "@playwright/test"

interface TestDataOrder {
            url             : string
            emailId         : string
            password        : string
            productName     : string
            country         : string
            postCode        : string
};

export const customTest=baseTest.extend<{testDataOrder:TestDataOrder}>(
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