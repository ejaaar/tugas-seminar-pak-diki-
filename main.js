// buat program menentukan predikat nilai
// buat loop daftar siswa
// mengunakan swich untuk menu aplikasi

// ! buat program menentukan predikat nilai


nilai = 70

switch (true) {
    case nilai >= 90:
        console.log("nilai = A");
        break;

    case nilai >= 80:
        console.log("nilai = B");
        break;

    case nilai >= 70:
        console.log("nilai = C");
        break;

    case nilai < 70:
        console.log("nilai = D");
        break;
    default:
        console.log('error');
        
        break;
}

console.log("");


// ! buat loop daftar siswa


const siswa = ['aksa', 'galih', 'fahri', 'dewangga', 'galang']

for (i = 0; i < siswa.length; i++) {
    console.log(`siswa ke-${i + 1} = ${siswa[i]}`);
}

console.log("");

// ! mengunakan swich untuk menu aplikasi

let sistem = 'menu login'

switch (true) {
    case sistem == 'menu login':
        console.log("menu login");
        break;

    case sistem == 'menu setting':
        console.log("menu setting");
        break;

    case sistem == 'menu log out':
        console.log("menu log out");
        break;

    case sistem == 'menu search':
        console.log("menu search");
        break;

    case sistem == 'menu akun':
        console.log("menu akun");
        break;

    default:
        console.log('404');
        break;
}