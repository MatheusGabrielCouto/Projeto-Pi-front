export const cpfMask = value => {
  return value
    .replace(/\D/g, '')                     // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2')        // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')       // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const removeLetters = value => {
  return value.replace(/\D/g, '') 
}

export const numberCardMask = value => {
  return value
    .replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

export const cnpjMask = value => {
  return value
    .replace(/\D/g,'')                           //Remove tudo o que não é dígito
    .replace(/^(\d{2})(\d)/,'$1.$2')             //Coloca ponto entre o segundo e o terceiro dígitos
    .replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3') //Coloca ponto entre o quinto e o sexto dígitos
    .replace(/\.(\d{3})(\d)/,'.$1/$2')           //Coloca uma barra entre o oitavo e o nono dígitos
    .replace(/(\d{4})(\d)/,'$1-$2')              //Coloca um hífen depois do bloco de quatro dígitos
}

export const tokenMask = value => {
  return value
    .replace(/\D/g,'')                           //Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/,'$1-$2')              //Coloca um hífen depois do bloco de quatro dígitos
}

export const valorMask = value => {
  if(value) {
    return value
    .replace(/\D/g,'')                            // permite digitar apenas numero
    .replace(/(\d{1})(\d{14})$/,'$1.$2')          // coloca ponto antes dos ultimos digitos
    .replace(/(\d{1})(\d{11})$/,'$1.$2')          // coloca ponto antes dos ultimos 11 digitos
    .replace(/(\d{1})(\d{8})$/,'$1.$2')           // coloca ponto antes dos ultimos 8 digitos
    .replace(/(\d{1})(\d{5})$/,'$1.$2')           // coloca ponto antes dos ultimos 5 digitos
    .replace(/(\d{1})(\d{1,2})$/,'$1,$2')         // coloca virgula antes dos ultimos 2 digitos
  }
}


export const phoneMask = value => {
    if (value) {
      return value
        .replace(/\D/g,"")                           //Remove tudo o que não é dígito  
        .replace(/^(\d{2})(\d)/g,"($1) $2")          //Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d)(\d{4})$/,"$1-$2")             //Coloca hífen entre o quarto e o quinto dígitos
    }
}

export const lettersMask = (value) => {
  if(value) {
    return value
    .replace(/[^\w\ ]|\d/g, '');
  }
};

export const dataMask = value => {
  return value
  .replace(/\D/g,"")
  .replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3")
}

export const newDataMask = value => {
  return value
  .replace(/\D/g,"")
  .replace(/^(\d{2})(\d{2})(\d)/, "$1-$2-$3")
}

export const cepMask = value => {
  return value
  .replace(/\D/g, '')
  .replace(/^(\d{5})(\d)/, '$1-$2')
}
