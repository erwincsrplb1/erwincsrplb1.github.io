// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi herf
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$(body).animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, swing);

	e.preventDefault();

});