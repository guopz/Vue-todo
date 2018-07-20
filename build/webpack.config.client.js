const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

let config,
	devServer = {
        port: '9999',
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true
    },
    defaultPlugins = [
   		new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ];

if (isDev) {
    // develop 开发环境
    config = merge(baseConfig, {
    	devtool: '#cheap-module-eval-source-map',
    	module: {
    		rules: [{
		        test: /\.styl$/,
		        use: [
		            'vue-style-loader',
		            'css-loader',
		            // {
		            // 	loader: 'css-loader',
		            // 	options: {
		            // 		module: true,
		            // 		localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hasj:base:5]',
		            // 	}
		            // },
		            {
		                loader: 'postcss-loader',
		                options: {
		                    sourceMap: true
		                }
		            },
		            'stylus-loader'
		        ]
		    }]
    	},
    	devServer,
    	plugins: defaultPlugins.concat([
	    	new webpack.HotModuleReplacementPlugin(),
	        new webpack.NoEmitOnErrorsPlugin()
    	])
    });
    
} else {

    // production 成产环境
    config = merge(baseConfig, {
    	entry:  {
	        app: path.join(__dirname, '../client/index.js'),
	        vendor: ['vue'] // vendor 内的框架会打包成有一个单独的文件
	    },
	    output: {
	    	filename: '[name].[chunkhash:8].js'
	    },
	    module: {
	    	rules: [{
		        test: /\.styl$/,
		        use: ExtractPlugin.extract({
		            fallback: 'vue-style-loader',
		            use: [
		                'css-loader',
		                {
		                    loader: 'postcss-loader',
		                    options: {
		                        sourceMap: true
		                    }
		                },
		                'stylus-loader'
		            ]
		        })
		    }]
	    },
	    plugins: defaultPlugins.concat([
	    	new ExtractPlugin('style.[contentHash:8].css'),
	        // 必须放在 runtime 前面
	        // 单独打包框架文件
	        new webpack.optimize.CommonsChunkPlugin({
	            name: 'vendor'
	        }),
	        // 单独打包 webpack 文件
	        new webpack.optimize.CommonsChunkPlugin({
	            name: 'runtime'
	        })
	    ])
    });

}

module.exports = config;