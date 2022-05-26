export default class TriviaService {  
  static getTrivia() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://opentdb.com/api.php?amount=12&category=9&difficulty=medium&type=multiple`;
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}