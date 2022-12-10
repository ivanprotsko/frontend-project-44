install:
	npm ci


install-eslint-packages:
	npm install eslint
	npm install eslint-config-airbnb-base
	npm install eslint-plugin-import

lint:
	npx eslint ./bin/

brain-games:
	node ./bin/brain-games.js

brain-even:
	node ./bin/brain-even.js

publish:
	npm publish --dry-run

