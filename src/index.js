import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TriviaService from './trivia-service';


$(document).ready(function() {
  $('#playButton').click(function(){
    $('.col-md-3').show();
    $('.answers').hide();
    
    let promise = TriviaService.getTrivia();
    promise.then(function(response) {
      const responseData = JSON.parse(response);
      $('.questions').each((index, element) => {
        $(element).text(responseData.results[index].question);
      });
      $('.col-md-3').click(function () {
        $('.answers').each((index, element) => {
          $('.questions').hide();
          $('.answers').show();
          $(element).text(responseData.results[index].correct_answer);
        });
      });
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

/*function getElements(response) {
      $('question').each((index, element) => {
        (element).text(response.results[index].question);
      });

      $('.triviaCard').click(function () {
        $('.answer').each((index, element) => {
          $('.question').hide();
          $('.answer').show();
          $(element).text(response.results[index].correct_answer);
        })
      })

      $('.cardOne').click(function() {
        $('.questionOne').hide();
        $('.answerOne').show();
        $('.answerOne').text(response.results[0].correct_answer);
      });

      $('.questionOne').text(response.results[0].question);
      $('.questionTwo').text(response.results[1].question);
      $('.questionThree').text(response.results[2].question);
      $('.questionFour').text(response.results[3].question);
      $('.questionFive').text(response.results[4].question);
      $('.questionSix').text(response.results[5].question);
      $('.questionSeven').text(response.results[6].question);
      $('.questionEight').text(response.results[7].question);
      $('.questionNine').text(response.results[8].question);
      $('.questionTen').text(response.results[9].question);
      $('.questionEleven').text(response.results[10].question);
      $('.questionTwelve').text(response.results[11].question); 

      $('.cardOne').click(function() {
        $('.questionOne').hide();
        $('.answerOne').show();
        $('.answerOne').text(response.results[0].correct_answer);
      });
      $('.cardTwo').click(function() {
        $('.questionTwo').hide();
        $('.answerTwo').show();
        $('.answerTwo').text(response.results[1].correct_answer);
      });
      $('.cardThree').click(function() {
        $('.questionThree').hide();
        $('.answerThree').show();
        $('.answerThree').text(response.results[2].correct_answer);
      });
      $('.cardFour').click(function() {
        $('.questionFour').hide();
        $('.answerFour').show();
        $('.answerFour').text(response.results[3].correct_answer);
      });
      $('.cardFive').click(function() {
        $('.questionFive').hide();
        $('.answerFive').show();
        $('.answerFive').text(response.results[4].correct_answer);
      });
      $('.cardSix').click(function() {
        $('.questionSix').hide();
        $('.answerSix').show();
        $('.answerSix').text(response.results[5].correct_answer);
      });
      $('.cardSeven').click(function() {
        $('.questionSeven').hide();
        $('.answerSeven').show();
        $('.answerSeven').text(response.results[6].correct_answer);
      });
      $('.cardEight').click(function() {
        $('.questionEight').hide();
        $('.answerEight').show();
        $('.answerEight').text(response.results[7].correct_answer);
      });
      $('.cardNine').click(function() {
        $('.questionNine').hide();
        $('.answerNine').show();
        $('.answerNine').text(response.results[8].correct_answer);
      });
      $('.cardTen').click(function() {
        $('.questionTen').hide();
        $('.answerTen').show();
        $('.answerTen').text(response.results[9].correct_answer);
      });
      $('.cardEleven').click(function() {
        $('.questionEleven').hide();
        $('.answerEleven').show();
        $('.answerEleven').text(response.results[10].correct_answer);
      });
      $('.cardTwelve').click(function() {
        $('.questionTwelve').hide();
        $('.answerTwelve').show();
        $('.answerTwelve').text(response.results[11].correct_answer);
      });
    }

  });
});
*/

