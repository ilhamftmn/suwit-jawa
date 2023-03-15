// menangkap pilhan player
var p = prompt('pilih : gajah, semut, orang');

// menangkap pilihan komputer
// membangkitakan biolangan random
var comp = Math.random();

if (comp < 0.34) {
	comp = 'gajah';
} else if (comp >=0.34 && comp < 0.76) {
	comp = 'orang';
} else {
	comp = 'semut';
}

var hasil = '';

// menentukan rules 
if ( p == comp) {
	hasil = 'SERI';
} else if (p =='gajah') {
	if (comp == 'orang') {
		hasil = 'MENANG';
	} else {
		hasil = 'KALAH';
	}
	// hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
} else if (p == 'orang') {
	if (comp == 'gajah'){
		hasil = 'KALAH';
	} else {
		hasil = 'MENANG';
	} 
	// hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
} else if (p == 'semut') {
	if (comp == 'orang'){
		hasil = 'KALAH';
	} else {
		hasil = "MENANG";
	}
	// hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
	hasil = 'Memasukan Pilihan Yang Salah!!';
}
// tampilan hasilnya
alert('Kamu memilih :' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);