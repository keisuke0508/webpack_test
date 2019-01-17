const date = (+new Date)
const fs = require("fs");

module.exports = {
	watch: true,
	mode: 'production',
	entry: "./assets/app.js",
	output: {
		path: `${__dirname}/static/js`,
		filename: "app." + date + ".js"
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

var static_file = JSON.parse(fs.readFileSync(`${__dirname}/static_file_version.json`))
static_file.version = date;
fs.writeFileSync(`${__dirname}/static_file_version.json`, JSON.stringify(static_file, null, ''))
