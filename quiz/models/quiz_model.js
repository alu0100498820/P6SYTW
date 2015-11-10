var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },)
}

module.exports = Quiz;