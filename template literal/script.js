// 1. Looping

// const mhs = [
//   {
//     nama: "Edin Hidayat Hasanudin",
//     email: "edin@email.com",
//   },
//   {
//     nama: "Hendi Budianto",
//     email: "hendi@email.com",
//   },
//   {
//     nama: "Ade Firmansyah",
//     email: "ade@email.com",
//   },
// ];

// let el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>Nama : ${m.nama}</li>
//     <li>Email : ${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// 2. Ternary (Pengkondisian)

// const lagu = [
//   {
//     judul: "Begadang",
//     penyanyi: "Rhoma Irama",
//   },
//   {
//     judul: "Cuma kamu",
//     penyanyi: "Rhoma Irama",
//     feat: "Rita Sugiarto",
//   },
//   {
//     judul: "Pengabdian",
//     penyanyi: "Rhoma Irama",
//   },
//   {
//     judul: "Pertemuan",
//     penyanyi: "Rhoma Irama",
//     feat: "Rita Sugiarto",
//   },
//   {
//     judul: "Puisi Cinta",
//     penyanyi: "Rhoma Irama",
//     feat: "Rita Sugiarto",
//   },
// ];

// let el = `<div class="lagu">
// ${lagu
//   .map(
//     (lg) => `
//         <ul>
//         <li>Judul Lagu : ${lg.judul}</li>
//         <li>Penyanyi : ${lg.penyanyi} ${lg.feat ? `Feat. ${lg.feat}` : ""}</li>
//         </ul>`
//   )
//   .join("")}
// </div>`;

// 3. Nested (Fragments HTML Bersarang)

const mhs = {
  nama: "Edin Hidayat Hasanudin",
  semester: 5,
  mataKuliah: [
    "Pemrograman Web",
    "Analisis Data",
    "Security Advance",
    "Struktur Algoritma",
  ],
};

function daftarMataKuliah(mataKuliah) {
  return `<ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
    <h3>${mhs.nama}</h3>
    <h4>Semester : ${mhs.semester}</h4>
    <h4>Mata Kuliah :</h4>
    ${daftarMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
