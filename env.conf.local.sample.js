var env = process.env.NODE_ENV;
var envConfig = {
  "domain": "sfgov.org",
  "path": "",
  "port": "",
  "user": "",
  "password": ""
};

switch(env) {
  default:
    envConfig.domain = 'sfgov.org';
    envConfig.path = '';
    envConfig.port = '';
}

module.exports = envConfig;