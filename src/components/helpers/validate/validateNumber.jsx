const validateNumber = (number) => {
  const emailRegex = /^[+]{0,1}380([0-9]{9})$/;
  return emailRegex.test(number);
};

export default validateNumber;
