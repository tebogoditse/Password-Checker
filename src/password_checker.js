function validate(password) {
    var passLength = /(?=.{8,})/;
    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var number = /[0-9]/;

    if (passLength.test(password) &&
        upper.test(password) &&
        lower.test(password) &&
        number.test(password)) {
        return "valid password";
    }
    else{
      return "ERROR! Password must have atleast:\n 1 lowercase letter\n 1 uppercase letter\n 1 number\n And be 8 characters or longer";
  }
}

function password_is_ok(password) {
    var minLength = /(?=.{8,})/;
    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var number = /[0-9]/;

    var length = minLength.test(password);
    var up = upper.test(password);
    var low = lower.test(password);
    var num = number.test(password);

    if (length && (up || low || num)) {
        return "valid password";
    }
    return "ERROR!\nPassword must be 8 characters or longer and atlease 1 uppercase, 1 lowercase or 1 number";
}

console.log(validate('tebogoditse'));
