// var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/ ;
// var usernameRegex = /^[a-z0-9_-]{3,16}$/ ;

$(function(){
  $('#lastName').focusout(function(){
    var input = $('#lastName').val();
    var regex = new RegExp(/^[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+$/);
    if (regex.test(input)){
    } else {
      alert('Merci d\'entrer un nom valide')
    }
  });

  $('#firstName').focusout(function(){
    var input2 = $('#firstName').val();
    var regex2 = new RegExp(/^[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+$/);
    if (regex2.test(input2)){
    } else {
      alert('Merci d\'entrer un prénom valide')
    }
  });

  $('#mail').focusout(function(){
    var input3 = $('#mail').val();
    var regex3 = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    if (regex3.test(input3)){
    } else {
      alert('Merci d\'entrer un mail valide')
    }
  });

  $('#phoneNumber').focusout(function(){
    var input4 = $('#phoneNumber').val();
    var regex4 = new RegExp(/^0[1-9]{1}\d{8}$/i);
    if (regex4.test(input4)){
    } else {
      alert('Merci d\'entrer un numéro de téléphone valide')
    }
  });
});
