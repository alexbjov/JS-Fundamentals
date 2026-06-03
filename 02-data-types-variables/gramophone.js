function solve(band, album, song) {
	const ONE_FULL_ROTATION = 2.5;

	const duration = (album.length * band.length * song.length) / 2;

	const rotations = Math.ceil(duration / ONE_FULL_ROTATION);
	console.log(`The plate was rotated ${rotations} times.`);
}

solve("Black Sabbath", "Paranoid", "War Pigs");
solve("Rammstein", "Sehnsucht", "Engel");
