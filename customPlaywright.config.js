// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const config = {


  testDir: './tests',
  retries:1,
  timeout : 30*1000,
  except :{
    timeout : 5000,
  },

  reporter : 'html',

  projects :[
    {
      name :'chrome',
      use: {
        browserName:'chromium',
        headless:false,
        screenshot:'on',
        video:'retain-on-failure',
        //ignoreHttpsError:true,
        //viewport:{width:720,height:720},
       // Permissions:['geolocation']
        trace:'retain-on-failure'  }
       },
       {
       name :'safari',
        use: {
        browserName:'webkit',
        headless:false,
        screenshot:'on',
        //...devices['iPhone 12 Mini landscape'],
        trace:'retain-on-failure'  
       },

    }

  ]


  
};

module.exports=config;

