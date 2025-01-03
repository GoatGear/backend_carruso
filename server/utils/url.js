const limpiarUrl = (t) => {
	cadena = t.replace(/[&\/\\#,+()$~%.'":*¿?<>{}]/g, "");

	// Lo queremos devolver limpio en minusculas
	cadena = cadena.toLowerCase();

	// Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
	cadena = cadena.replace(/ /g, "-");

	// Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
	cadena = cadena.replace(/á/gi, "a");
	cadena = cadena.replace(/é/gi, "e");
	cadena = cadena.replace(/í/gi, "i");
	cadena = cadena.replace(/ó/gi, "o");
	cadena = cadena.replace(/ú/gi, "u");
	cadena = cadena.replace(/ñ/gi, "n");
	return cadena;
};

module.exports = {
	limpiarUrl,
};
