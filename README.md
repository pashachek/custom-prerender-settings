# custom-prerender-settings
firstly, clone the repository:
```bash
git clone https://github.com/pashachek/custom-prerender-settings.git
```

secondly, if global packages (on the next step) from package.json won't install, run this:
```bash
git config --global url."https://github".insteadOf git://github
```

then:
```bash
npm install --verbouse --unsafe-perm --no-package-lock
```

and lastly:
```bash
node server.js
```

also, installation of [lev2](https://github.com/maxlath/lev2) is recommended (for debug purposes)
