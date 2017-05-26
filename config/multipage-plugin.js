const webpack = require('webpack');
const helpers = require('./helpers');
var _ = require('lodash');

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const AOT = helpers.hasNpmFlag('aot');
const METADATA = {
    title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

var _entry = {};

var _plugins = [];

var pages = [{
    name: 'hello',
    dir: './src'
}, {
    name: 'appx',
    dir: './src/app/appx'
}, {
    name: 'account',
    dir: '../src/app/account',
    bootDrct: 'user'
}, {
    name: 'device',
    dir: './src/app/device',
    bootDrct: 'devices'
}, {
    name: 'customer',
    dir: './src/app/customer',
    bootDrct: 'customers'
}, {
    name: 'consumable',
    dir: './src/app/appx',
    bootDrct: 'consumables'
}, ];


pages.forEach((page) => {
    if (!_entry[page.name]) {
        _entry[page.name] = AOT ? `${page.dir}/${page.name}.browser.aot.ts` : `${page.dir}/${page.name}.browser.ts`;
    }

    _plugins.push(new CommonsChunkPlugin({
        name: page.name,
        chunks: [page.name]
    }));

    _plugins.push(new HtmlWebpackPlugin({
        favicon: 'src/favicon.ico',
        template: 'src/index.html',
        filename: page.name + '.html',
        title: METADATA.title,
        bootDrct: `<${page.bootDrct || page.name}></${page.bootDrct || page.name}>`,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        chunks: ['polyfills', 'vendor', page.name],
        inject: 'head'
    }));
})



var _entry = {
    'hello': AOT ? './src/hello.browser.aot.ts' : './src/hello.browser.ts',
    'appx': AOT ? './src/app/appx/appx.browser.aot.ts' : './src/app/appx/appx.browser.ts',
    'account': AOT ? './src/app/account/account.browser.aot.ts' : './src/app/account/account.browser.ts',
    'device': AOT ? './src/app/device/device.browser.aot.ts' : './src/app/device/device.browser.ts',
    'customer': AOT ? './src/app/customer/customer.browser.aot.ts' : './src/app/customer/customer.browser.ts',
    'consumable': AOT ? './src/app/consumable/consumable.browser.aot.ts' : './src/app/consumable/consumable.browser.ts',
};



module.exports = {
    entry: _entry,
    plugins: _plugins,
    mergeEntry: (obj) => {
        return _.extend(_entry, obj);
    }
}