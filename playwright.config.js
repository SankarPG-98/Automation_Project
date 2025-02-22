// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const config = {


  testDir: './tests',
  timeout : 30*1000,
  except :{
    timeout : 5000,
  },

  reporter: [
    ['line'],
    ['allure-playwright'],  // Enable allure reporter here
  ],
  
  use: {
   browserName:'chromium',
   headless:true,
   screenshot:'on',
   trace:'retain-on-failure'


  },

  
};

module.exports=config;

