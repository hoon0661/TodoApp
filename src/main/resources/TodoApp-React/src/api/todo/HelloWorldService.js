import axios from "axios";
import { API_URL } from "./../../Constants";

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get(`${API_URL}/hello-world`);
  }

  executeHelloWorldBeanService() {
    return axios.get(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldPathVariableService(name) {
    // let username = "username";
    // let password = "password";

    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    //The "Basic" HTTP authentication scheme transmits credentials as user ID/password pairs, encoded using base64
    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`
      //   ,
      //   { headers: { authorization: basicAuthHeader } }
    );
  }
}

export default new HelloWorldService();
