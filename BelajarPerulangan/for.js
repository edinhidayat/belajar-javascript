console.log("Bintang a");
var a = "";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    a += "*";
  }
  a += "\n";
}
console.log(a);

console.log("\n");

console.log("Bintang b");
var b = "";
for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    b += "*";
  }
  b += "\n";
}
console.log(b);

console.log("\n");

console.log("Bintang c");
var c = "";
for (i = 5; i > 0; i--) {
  for (j = 0; j <= 5; j++) {
    if (j >= i) {
      c += "*";
    } else {
      c += " ";
    }
  }
  c += "\n";
}
console.log(c);

console.log("\n");

console.log("Bintang d");
var d = "";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j <= i) {
      d += "*";
    } else {
      d += " ";
    }
  }
  d += "\n";
}
console.log(d);

console.log("\n");

console.log("Bintang e");
var e = "";
for (i = 5; i > 0; i--) {
  for (j = 0; j <= 5; j++) {
    if (j >= i) {
      e += "* ";
    } else {
      e += " ";
    }
  }
  e += "\n";
}
console.log(e);

console.log("\n");

console.log("pagar f");
var f = "";
for (var i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        f += "#";
      } else {
        f += " ";
      }
    }
    f += "\n";
  } else {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        f += " ";
      } else {
        f += "#";
      }
    }
    f += "\n";
  }
}
console.log(f);
