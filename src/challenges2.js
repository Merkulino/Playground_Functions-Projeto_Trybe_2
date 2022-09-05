// Desafio 11
function generatePhoneNumber(array) {
  if (array.length === 11) {
    let phoneNum = '';
    let phoneNumArr = array.map(String);
    let count = 0;

    // Verificações
    for (let num in array) {
      if (array[num] >= 0 && array[num] <= 9) {
        for (let numC of array) {
          if (array[num] === numC) {
            count += 1;
            if (count === 3) {
              return 'não é possível gerar um número de telefone com esses valores';
            }
          }
        }
        count = 0;
      } else {
        return 'não é possível gerar um número de telefone com esses valores';
      }

      phoneNum += phoneNumArr[num];
    }
    // Phone Mask
    // Utilizando mascara regex nessa atividade. Fonte do código:
    // https://stackoverflow.com/questions/15802100/phone-mask-for-text-field-with-regex

    phoneNum = phoneNum.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');

    return phoneNum;
  } return 'Array com tamanho incorreto.';
}

// Desafio 12 - COMPLEXIDADE: posso colocar um for para pegar cada valor e comparar com a soma dos demais if(array[line] > (array[line2] + array[line2]))

function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC))
  && (lineC < (lineA + lineB))) {
    if ((lineA > Math.abs(lineB / lineC)) && (lineB > Math.abs(lineA / lineC))
    && (lineC > Math.abs(lineB / lineA))) {
      return true;
    }
  } return false;
}

// Desafio 13

function hydrate(string) {
  let reg = /\d+/g;
  let bebidas = 0;
  let bebidasInt = [];
  let copos = 0;
  bebidas = string.match(reg);

  for (let letter of bebidas) {
    bebidasInt.push(Number(letter));
  }

  for (let num of bebidasInt) {
    copos += num;
  }
  if (copos === 1) {
    return `${copos} copo de água`;
  }

  return `${copos} copos de água`;
}
