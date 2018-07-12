function letraDNI(num) {
    const aLetras= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
    return aLetras[num%23]

  }

  console.log(letraDNI('05017822'))