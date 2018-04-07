export const sortatoz = property => (f1, f2) => {
  if(property && f1[property] && f2[property]){
    const first = f1[property].toString().toUpperCase();
    const second = f2[property].toString().toUpperCase();

    if(first > second)
      return 1;

    if(second > first)
      return -1;
  }

  return 0;
};

