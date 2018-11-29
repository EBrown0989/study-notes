# Quick reference to Webpack's EnvironmentPlugin
### [Webpack](https://webpack.js.org/plugins/environment-plugin/)

Accepts either an array of keys or an object mapping its keys to their default values.
```js
new webpack.Environment(['NODE_ENV', 'DEBUG']);
```
Equivalent to the DefinePlugin here:
```js
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
});
```

> **NOTE**: The reason I looked this subject up was due to a warning regarding default values.

The EnvirionmentPlugin alternatively supports an object, which in turn maps keys
to their default values. The default value for a key is taken if the key is undefined
in `process.env`.

```js
new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false
});
```

To specify an unset default value, use `null` instead of `undefined`.
