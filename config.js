// EDI Pretty Print
const sep_edi_regex = /\'/g;
const sep_edi_rn = '\'\r\n';

// Reg Add command variables
const command_reg_add_prefix = `reg add "HKEY_CLASSES_ROOT\\*\\shell\\EDI Pretty Print\\command" /f /d "`;
const node_path = process.execPath;
const index_module_path = __dirname + `\\index.js`;
const command_reg_add_suffix = ` %1"`;

// Reg Add and Del commands
const command_reg_add = command_reg_add_prefix + node_path + ` ` + index_module_path + command_reg_add_suffix;
const command_reg_del = `reg delete "HKEY_CLASSES_ROOT\\*\\shell\\EDI Pretty Print" /f`;

module.exports = {
    sep_edi_regex: sep_edi_regex,
    sep_edi_rn: sep_edi_rn,
    command_reg_add: command_reg_add,
    command_reg_del: command_reg_del
};