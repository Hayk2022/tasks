function revStr(str) {
    if (str.length <= 1) {
      return str;
    }
    else {
      return str.charAt(str.length - 1) + revStr(str.substring(0, str.length - 1));
    }
  }
  const revstr = revStr('12345')
  console.log(revstr);
  