module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{test: /\.js$/, 
			exclude: /node_modules/,
				use: {
				loader: 'babel-loader',
				options : {
					presets: ['env', 'react']
				}
			}}
		]
	},
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	}
};