module.exports = {
	watch: true,
	mode: 'production',
	entry: "./assets/app.js",
	output: {
		path: `${__dirname}/static/js`,
		filename: "app.min.js"
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
