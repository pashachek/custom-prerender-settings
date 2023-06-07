# custom-prerender-settings
firstly, clone the repository:
git clone https://github.com/pashachek/custom-prerender-settings.git

secondly, if global packages (on the next step) from package.json won't install, run this:
git config --global url."https://github".insteadOf git://github

then:
npm install --verbouse --unsafe-perm --no-package-lock

and lastly:
node server.js
