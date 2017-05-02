##Install

###On a mac

####Install Homebrew
If you're on a mac and you're not using homebrew, you should:

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

###Install Node and NPM
```
$ brew install node
```

###Install Java

Update brew if not a fresh install, then install java

```
$ brew update
$ brew cask install java
```
---
###On Windows
####Install Node and NPM
<https://nodejs.org/en/download/>

####Install Java
<https://java.com/en/download/help/download_options.xml#windows>

---

###Install dependencies
After installing Node, NPM, and Java, we're finally ready to write/run some nightwatch tests.

Open a command prompt and cd to the nightwatch test directory.  

```
$ cd nightwatch-test
```
Now install the nightwatch-test project dependencies listed in package.json

```
$ npm install
```

There is a postinstall script that will auto run the selenium server download.

##Writing Tests
All tests are in the `test/e2e` directory.  Refer to nightwatch api documentation when writing additional tests: <http://nightwatchjs.org/api>

##Running E2E Tests

####Environment
The test environment is configured in `env.conf.local.js`.  This is automatically ignored by git, so it is not included here.  However, a sample local config file *has* been included: `env.conf.local.sample.js`.  Rename this file to `env.conf.local.js` and set the values as appropriate.

####Run tests
The following will run all tests in the `test/e2e` directory.  A sample environment config and test suite has been included.

```
$ npm run e2e
```
