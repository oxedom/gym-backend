const registerHandle = (err) => {

  console.log(`The error message is ${err.message}`);
  console.log(`The error code is ${err.code}`);

  let errors = {
    email: '',
    password: ''
  };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({
      properties
    }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

module.exports = {
  registerHandle
}