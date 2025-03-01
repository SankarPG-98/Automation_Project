class ApiUtils {

  constructor(apiContext, loginPayLoad) {
      this.apiContext = apiContext;
      this.loginPayLoad = loginPayLoad;
  }

  async getToken() {
      const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
          data: this.loginPayLoad
      });
      const loginResponseJson = await loginResponse.json();
      const token = loginResponseJson.token;
      return token;
  }

  async createOrder(orderPayLoad) {
      const response = {};
      response.token = await this.getToken();
      
      const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
          data: orderPayLoad,
          headers: {
              'Authorization': response.token,
              'Content-type': "application/json"
          }
      });
      
      const orderResponseJson = await orderResponse.json();
      const orderId = orderResponseJson.orders[0].
      
      // Assuming orderId is inside 'orders[0].orderId'
      response.orderId = orderId;
      
      return response;
  }
}
module.exports = {ApiUtils};
