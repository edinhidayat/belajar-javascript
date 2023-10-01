// Tagged Literal

// const nama = "Edin Hidayat Hasanudin";
// const umur = 39;

// function coba(strings, ...args) {
//   // Pakai ForEach
//   //   let result = [];
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${args[i] || ""}`;
//   //   });
//   //   return result;

//   // Pakai Reduce
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${args[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

const nama = "Edin Hidayat Hasanudin";
const umur = 39;
const email = "edinhidayat@email.com";

function coba(strings, ...args) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${args[i] || ""}</span>`,
    ""
  );
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun. Email : ${email}.`;
document.body.innerHTML = str;
