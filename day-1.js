const frequencyChanges = ['13', '4', '-8', '11', '13', '-12', '19', '6', '-4', '-7', '3', '16', '-18', '11', '-10', '11', '13', '-4', '-16', '19', '-1', '12', '-20', '17', '9', '5', '-1', '-18', '-1', '5', '18', '12', '16', '-8', '-3', '16', '9', '9', '6', '11', '-19', '6', '-19', '-9', '5', '9', '4', '17', '-12', '-20', '9', '-15', '-11', '-2', '-1', '-5', '-12', '-4', '-2', '-7', '-1', '9', '3', '-1', '5', '-1', '13', '18', '-17', '15', '-1', '-6', '15', '3', '9', '16', '18', '-3', '18', '-14', '17', '-11', '15', '14', '12', '5', '9', '-13', '3', '-15', '-18', '-13', '17', '-15', '16', '9', '-6', '-13', '-10', '-16', '-9', '4', '-12', '-2', '-9', '-8', '6', '12', '20', '-9', '8', '7', '13', '-11', '19', '9', '-13', '-1', '-7', '6', '-19', '-17', '12', '-3', '-8', '17', '-16', '17', '1', '21', '12', '4', '3', '16', '19', '11', '12', '15', '14', '17', '-5', '18', '15', '15', '5', '6', '-16', '-20', '17', '-10', '-1', '18', '17', '7', '13', '-8', '3', '2', '2', '19', '-5', '11', '-5', '8', '-5', '19', '12', '-2', '7', '6', '-16', '-17', '4', '9', '1', '-9', '-8', '5', '-13', '-12', '17', '-4', '-12', '-16', '17', '-8', '-12', '-12', '-8', '7', '9', '-7', '3', '2', '4', '19', '-13', '12', '-8', '6', '13', '-3', '9', '15', '-1', '13', '-3', '-15', '8', '19', '16', '14', '-18', '-6', '1', '11', '-17', '-14', '3', '14', '11', '-20', '1', '-16', '-9', '4', '18', '16', '13', '-5', '14', '-7', '-16', '15', '15', '4', '5', '-14', '8', '17', '4', '19', '-3', '14', '8', '-1', '7', '-2', '1', '4', '-1', '-1', '7', '10', '13', '-1', '-10', '5', '-3', '-17', '-17', '-17', '16', '-7', '-10', '-5', '-19', '5', '-4', '6', '14', '-5', '19', '-15', '7', '-14', '5', '15', '10', '15', '8', '3', '-6', '-12', '17', '14', '-11', '7', '15', '-4', '-16', '2', '5', '17', '2', '-9', '5', '-7', '21', '-15', '14', '2', '-12', '7', '6', '16', '14', '-5', '-8', '-15', '4', '15', '20', '1', '-15', '1', '10', '-14', '-2', '-7', '-11', '-14', '-24', '-16', '9', '-24', '3', '-4', '-15', '14', '-22', '-13', '-17', '1', '-13', '-6', '2', '11', '-19', '-10', '3', '12', '24', '-1', '-13', '-1', '3', '19', '-13', '7', '16', '-2', '5', '14', '-3', '4', '-24', '-14', '8', '-3', '-15', '-17', '-16', '26', '-15', '-17', '5', '9', '52', '-8', '-15', '-13', '-6', '-37', '-14', '-3', '-10', '-1', '-12', '-14', '-8', '10', '10', '-5', '15', '-37', '9', '-11', '-11', '12', '-15', '2', '-8', '-19', '-2', '19', '-6', '-6', '16', '-12', '1', '19', '-15', '19', '2', '-17', '-3', '-13', '-5', '-11', '-17', '-14', '19', '2', '15', '-9', '-18', '-16', '-16', '5', '-9', '7', '16', '3', '-18', '4', '3', '-9', '-14', '-13', '-13', '-16', '-19', '11', '-1', '14', '10', '17', '17', '-5', '16', '-17', '-17', '11', '10', '16', '11', '-13', '17', '-10', '16', '-18', '-15', '16', '-14', '18', '16', '7', '12', '-16', '12', '-10', '17', '-14', '8', '15', '-18', '-18', '7', '8', '-17', '1', '-12', '16', '-2', '16', '13', '2', '-7', '10', '-2', '-14', '20', '5', '16', '-13', '-18', '14', '19', '16', '-6', '-8', '-30', '14', '26', '9', '9', '20', '52', '-45', '-165', '-15', '7', '2', '-13', '-6', '16', '-17', '-9', '1', '7', '5', '11', '23', '-2', '-7', '6', '-7', '-4', '21', '-15', '-5', '-17', '-6', '-42', '3', '40', '18', '41', '3', '13', '-92', '-22', '-17', '-37', '-17', '10', '19', '-24', '-10', '-2', '-3', '-1', '8', '12', '-17', '14', '6', '19', '4', '-41', '-64', '-5', '-16', '5', '-4', '-20', '-7', '4', '1', '-15', '-11', '-3', '-13', '58', '33', '8', '-10', '-6', '-69', '1', '-107', '84', '-79266', '-8', '13', '3', '-18', '11', '12', '-17', '10', '9', '15', '13', '16', '-11', '8', '5', '-6', '-4', '-1', '-10', '6', '-13', '-7', '8', '-14', '-17', '1', '13', '4', '20', '-2', '-4', '3', '-14', '3', '4', '-15', '3', '18', '-12', '-16', '-16', '-15', '11', '-17', '-12', '13', '-2', '6', '5', '16', '-7', '4', '-16', '-18', '8', '18', '-3', '-8', '18', '-6', '11', '-2', '-16', '-16', '2', '-9', '16', '9', '-35', '-19', '-2', '-17', '4', '10', '17', '12', '2', '-18', '-3', '12', '4', '-12', '2', '-18', '6', '8', '8', '8', '5', '-12', '-14', '-11', '1', '-16', '4', '-7', '-10', '-7', '-16', '-15', '-17', '11', '-12', '17', '-1', '18', '4', '2', '-12', '7', '-6', '-3', '5', '19', '-2', '-11', '-12', '-10', '-1', '-17', '-15', '-11', '-12', '-7', '-12', '-3', '11', '-12', '-14', '-3', '2', '9', '-2', '6', '4', '19', '-15', '-1', '-15', '-17', '-20', '9', '13', '13', '20', '7', '-8', '-8', '-15', '-8', '15', '12', '-16', '-15', '17', '-9', '1', '-22', '-4', '11', '3', '-1', '-17', '10', '3', '-4', '-3', '-11', '-17', '2', '4', '-18', '7', '1', '-9', '-12', '-1', '3', '-10', '-18', '1', '-14', '7', '-10', '-13', '-4', '13', '16', '-19', '-2', '-15', '-8', '1', '9', '11', '1', '18', '-13', '18', '6', '7', '10', '1', '12', '17', '-9', '8', '-14', '-4', '-14', '-11', '10', '-3', '-8', '-16', '20', '10', '4', '6', '1', '13', '11', '-10', '-8', '20', '14', '-6', '10', '-11', '2', '-6', '-19', '15', '-10', '-13', '-10', '-10', '-10', '2', '-5', '-6', '-3', '-18', '11', '-7', '-17', '-18', '-8', '13', '2', '18', '25', '-9', '16', '-10', '-10', '-14', '-1', '18', '14', '12', '27', '-10', '3', '-12', '-30', '23', '6', '44', '13', '-19', '-15', '5', '18', '9', '-7', '5', '-6', '17', '15', '-21', '4', '13', '-23', '21', '12', '-19', '5', '16', '32', '8', '8', '15', '-6', '11', '-14', '17', '4', '2', '4', '3', '8', '13', '-14', '13', '-6', '-18', '-18', '-15', '13', '-2', '-17', '4', '-15', '20', '5', '15', '-9', '-9', '-14', '5', '8', '-2', '10', '20', '10', '-15', '-8', '-20', '18', '12', '19', '1', '-9', '19', '-12', '18', '9', '8', '10', '3', '13', '-5', '-3', '14', '-9', '-12', '-4', '-12', '8', '-15', '21', '-11', '1', '17', '17', '-18', '4', '20', '11', '-12', '21', '-4', '14', '-16', '-7', '6', '-15', '-6', '-7', '-7', '-16', '7', '20', '8', '9', '18', '8', '17', '-6', '-3', '-12', '9', '10', '-12', '9', '-21', '-19', '-29', '-12', '33', '-8', '-7', '-41', '7', '11', '-33', '-10', '7', '17', '-19', '-15', '5', '-6', '-19', '16', '-4', '-30', '-19', '1', '14', '-28', '-12', '23', '-67', '48', '-110', '-18', '-12', '2', '-7', '-12', '-12', '-8', '80339'];
const resultingFrequency = frequencyChanges.reduce((accumulator, frequencyChange) => {
  return accumulator + parseInt(frequencyChange);
}, 0);

console.log(`The resulting frequency is: ${resultingFrequency} 🎄`);
