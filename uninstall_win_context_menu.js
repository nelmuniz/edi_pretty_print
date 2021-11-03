#!/usr/bin/env node

const { exec } = require('child_process');
const config = require('./config.js');

// Execute reg delete command
exec(config.command_reg_del, (err, res) => {
	if (err) console.log(err);
	if (res) console.log(res + `Reg delete command executed succesfully. EDI Pretty Print uninstalled from context menu (Right-Click).`);
});