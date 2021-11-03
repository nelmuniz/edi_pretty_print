#!/usr/bin/env node

const { exec } = require('child_process');
const config = require('./config.js');

// Execute reg add command
exec(config.command_reg_add, (err, res) => {
	if (err) console.log(err);
	if (res) console.log(res + `Reg add command executed succesfully. EDI Pretty Print installed in context menu (Right-Click).`);
});