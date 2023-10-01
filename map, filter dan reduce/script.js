const angka = [-1, 3, 4, -4, -3, 9, 7, 5, 2, 1];

// For

// const angkaBaru = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] > 3) {
//     angkaBaru.push(angka[i]);
//   }
// }
// console.log(angkaBaru.sort());

// Filter

// const angkaBaru = angka.filter(function (a) {
//   return a > 3;
// });
// console.log(angkaBaru.sort());

// Pakai Filter dengan Arrow Function

// const angkaBaru = angka.filter((a) => a > 3);
// console.log(angkaBaru.sort());

// Map
// Kalikan tiap-tiap angka dengan 2

// const angkaBaru = angka.map((a) => a * 2);
// console.log(angka);
// console.log(angkaBaru);

// Reduce
// Jumlahkan berurutan dari array angka dengan nilai awal 5
// 5 + -1 + 3 + 4 + -4 + -3 + 9 + 7 + 5 + 2 + 1 = 28

// const angkaBaru = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   5
// );
// console.log(angkaBaru);

// Method Chaining
// Sumber dari array : const angka = [-1, 3, 4, -4, -3, 9, 7, 5, 2, 1];
// Cari angka > 3
// Kalikan angka-angka tersebut dengan 2
// Lalu Jumlahkan
// -1, 3, 4, -4, -3, 9, 7, 5, 2, 1

// const angkaBaru = angka
//   .filter((a) => a > 3) // 4,9,7,5
//   .map((a) => a * 2) // 8,18,14,10
//   .reduce((acc, curr) => acc + curr, 0); // 50 {angka nol pada reduce bisa ditulis atau dihilangkan, karena default 0}
// console.log(angkaBaru);
