import axios from 'axios';

export default class JsonApi {
  httpClient;
  
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:4000',
    })
  }  

  async getAllComment() {
    return this.httpClient.get(`comments`).then(console.log);
  };

}