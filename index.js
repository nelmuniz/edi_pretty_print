#!/usr/bin/env node

const fs = require('fs');
const config = require('./config.js');

// Get file path
let path = process.argv[2];

// Read file
fs.readFile(path, "utf8", (err, data) => {

	// Show message if error
	if (err) throw err;

	// Pretty prints the file: Adds new line and carriage return after each line separator
	data = data.replace(config.sep_edi_regex, config.sep_edi_rn).trim();

	// Write File
	fs.writeFile(path, data, err => {

		// Show message if error
		if (err) throw err;

		// Show message if success
		console.log(`EDI Pretty Printed: ` + path);
	})

});