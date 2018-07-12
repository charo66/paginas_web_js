function letraDNI(num) {
    const aLetras= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
    const LETRAS='TRWAGMYFPDXBNJZSQVHLCKET'
    
    //return aLetras[num%23]
    return LETRAS[num%23]

  }

  console.log(letraDNI('05017822'))