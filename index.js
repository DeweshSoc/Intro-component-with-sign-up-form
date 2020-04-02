function formValidation() {
  var inputFirstName = $("#first-name").val();
  var inputLastName = $("#last-name").val();
  var inputEmail = $("#email").val();
  var inputPassword = $("#password").val();
  var count = 0;

  if (inputFirstName == "") {
    $("#first-name").addClass("border-red");
    $("#helptext1").addClass("help-text");
    $("#first-name").attr("placeholder", "");
    $("#first-name").addClass("form-error-bg");
    count++;
  }

  if (inputLastName == "") {
    $("#last-name").addClass("border-red");
    $("#helptext2").addClass("help-text");
    $("#last-name").attr("placeholder", "");
    $("#last-name").addClass("form-error-bg");
    count++;
  }

  if (inputEmail == "" || !emailValidation(inputEmail)) {
    $("#email").addClass("border-red");
    $("#helptext3").addClass("help-text");
    $("#email").addClass("form-error-bg");
    $("#email").attr("placeholder", "");
    $("#email").addClass("form-input");
    count++;
  }

  if (inputPassword == "") {
    $("#password").addClass("border-red");
    $("#helptext4").addClass("help-text");
    $("#password").attr("placeholder", "");
    $("#password").addClass("form-error-bg");
    count++;
  }

  if (count > 0) {
    $(".form-control").on("input", function(e) {
      $(e.target).removeClass("border-red");
      $("#" + e.target.name).removeClass("help-text");
      $(e.target).removeClass("form-error-bg");
      $(e.target).removeClass("form-input");
    });
  }

  if (count > 0) {
    return false;
  }

  if (count === 0) {
    return true;
  }
}

// email validation : valid email should be of the form  abc@de.fgh or atleast a@b.c

function emailValidation(inputEmail) {
  if (inputEmail.includes("@") && inputEmail.includes(".")) {
    if (inputEmail.indexOf("@") !== 0) {
      if (inputEmail.indexOf("@") < inputEmail.indexOf(".")) {
        var diff = inputEmail.indexOf(".") - inputEmail.indexOf("@");
        if (diff > 1) {
          if (inputEmail[inputEmail.indexOf(".") + 1] != null) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
