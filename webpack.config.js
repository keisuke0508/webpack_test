const version = (+new Date)
const fs = require("fs");
const new_filename = 'app.' + version + '.js';

module.exports = {
	watch: true,
	mode: 'production',
	entry: "./assets/app.js",
	output: {
		path: `${__dirname}/static/js`,
		filename: new_filename
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					}
				]
			}
		]
	},
	devServer: {
		contentBase: `${__dirname}`,
		watchContentBase: true,
		publicPath: '/static/js',
    port: 3000,
    open: true,
		hot: true
	},
}

let static_file = JSON.parse(fs.readFileSync(`${__dirname}/static_file_version.json`));
let filenames = fs.readdirSync(`${__dirname}/static/js/`);
for(filenum = 0; filenum < filenames.length; filenum++) {
	if(filenames[filenum] != new_filename) {
		fs.unlink(`${__dirname}/static/js/${filenames[filenum]}`, function(){});
	}
}
static_file.version = version;
fs.writeFileSync(`${__dirname}/static_file_version.json`, JSON.stringify(static_file, null, ''));

let old_version = static_file.version;
static_file.version = version;
fs.writeFileSync(`${__dirname}/static_file_version.json`, JSON.stringify(static_file, null, ''));
try {
	fs.unlink(`${__dirname}/static/js/app.${old_version}.js`, function(){});
}catch(err) {
	console.log(err);
}
