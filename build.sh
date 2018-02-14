npm run prod
cd dist
git init
git add -A
git commit -m 'update site'
git push -f git@github.com:elf-mouse/css.div.git master:gh-pages
