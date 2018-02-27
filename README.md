## UP & RUNNING

Install dependencies:

```
$ npm install
```

_or_

```
$ yarn
```

Fire up a development server:

```
$ yarn dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Linting

_You should have eslint and eslint-watch installed. If you don't, run the following:_

```
$ npm i -g eslint eslint-watch
```

or if you need permissions:

```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

## Testing

To run the tests once:

```
$ yarn test
```

To run the watch script (for only relevant test files)

```
$ yarn test:watch
```

To run the watch script (for all test files)

```
$ yarn test:watchAll
```

To view the coverage report:

```
$ yarn test:coverage:report
```

## Production Build

To build your production assets and run the server:

```
$ yarn start
```
