ini-config
==========

OOTB solution for constructing a config array from main and environment INI files.


What you get
------------

In your project root directory:

```bash
config/main.ini        # non-environment-specific settings
config/env.ini         # local settings, ignored by git
config/env.example.ini # optional example of env.ini
config/.gitignore
```

In your app:

```js
const config = require('ini-config'); // js array
```


Installation
------------

```
$ npm install ini-config --save
```


Configuration
-------------

1) Create `config` folder in your project root directory:
```
$ mkdir config
```

2) Create 2 ini files:
```
$ touch config/main.ini
$ touch config/env.ini
```

3) Ignore `env.ini` file:
```
$ echo 'env.ini' > config/.gitignore
```

4) Add default and non-environment-specific settings into `main.ini`.
```ini
;example
[web]
host = localhost
port = 3000
[mongodb]
connectionString = mongodb://localhost:27017/app
```

5) Add settings for the current environment into `env.ini`.
```ini
;example
[web]
port = 3008
[mongodb]
connectionString = mongodb://user:password@dbhost:27017/app
```

6) Optionally, you can save an example of `env.ini` as `env.example.ini`.


Usage
-----

```js
const config = require('ini-config');

console.log(config.web.host);  // get string parameter
console.log(+config.web.port); // get int parameter
console.log(config.mongodb);   // get section
```

Settings from `env.ini` will override settings from `main.ini`.
