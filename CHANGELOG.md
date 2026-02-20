# Changelog

## 2.3.4 (2026-02-20)

Full Changelog: [v2.3.3...v2.3.4](https://github.com/brandnholl/doge-sdk/compare/v2.3.3...v2.3.4)

### Chores

* **internal/client:** fix form-urlencoded requests ([08c7248](https://github.com/brandnholl/doge-sdk/commit/08c7248ac2f8d95e17c0d61d426c1548fa1515e1))
* **internal:** avoid type checking errors with ts-reset ([5b4cf15](https://github.com/brandnholl/doge-sdk/commit/5b4cf1598dcdb4af4ca471c71047538f13716374))
* **internal:** remove mock server code ([81c7002](https://github.com/brandnholl/doge-sdk/commit/81c70023475b9b08712bc60d4e38063cb52f2cad))
* update mock server docs ([5474d45](https://github.com/brandnholl/doge-sdk/commit/5474d4584805e93260a1b327fff12d78d43e8e2a))

## 2.3.3 (2026-02-06)

Full Changelog: [v2.3.2...v2.3.3](https://github.com/brandnholl/doge-sdk/compare/v2.3.2...v2.3.3)

### Bug Fixes

* **client:** avoid removing abort listener too early ([93652f1](https://github.com/brandnholl/doge-sdk/commit/93652f150b5b4535c056e7512cee90f305abb6e4))


### Chores

* **client:** do not parse responses with empty content-length ([8e25a4e](https://github.com/brandnholl/doge-sdk/commit/8e25a4ed049472b407183d700aee2a97ea7edaed))
* **client:** restructure abort controller binding ([85b3a31](https://github.com/brandnholl/doge-sdk/commit/85b3a31f86869aed9806e6eccfde9388ce66d417))

## 2.3.2 (2026-02-03)

Full Changelog: [v2.3.1...v2.3.2](https://github.com/brandnholl/doge-sdk/compare/v2.3.1...v2.3.2)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([4c5c763](https://github.com/brandnholl/doge-sdk/commit/4c5c763911d68eaf4c1ab5e0dfe8e653f63f4fe6))


### Chores

* break long lines in snippets into multiline ([65d7d02](https://github.com/brandnholl/doge-sdk/commit/65d7d02a94a16ed8100b49b719d61fead56b8459))
* **ci:** upgrade `actions/github-script` ([715e6d7](https://github.com/brandnholl/doge-sdk/commit/715e6d7fb44f2fbee706352ae9b30a32674af0e4))
* **internal:** codegen related update ([25b6d7e](https://github.com/brandnholl/doge-sdk/commit/25b6d7e6af2ee61a0dc45ebaa73bed802b5549f0))
* **internal:** update `actions/checkout` version ([066ca17](https://github.com/brandnholl/doge-sdk/commit/066ca1712b386e1a180b2af7ccf2bfd16a308afd))
* **internal:** upgrade babel, qs, js-yaml ([a24aa38](https://github.com/brandnholl/doge-sdk/commit/a24aa3893cf20fed689767a834dd3ba881589fa4))

## 2.3.1 (2025-12-06)

Full Changelog: [v2.3.0...v2.3.1](https://github.com/brandnholl/doge-sdk/compare/v2.3.0...v2.3.1)

### Bug Fixes

* **mcp:** correct code tool API endpoint ([47e4842](https://github.com/brandnholl/doge-sdk/commit/47e48427592672ca7d5bf08c4d4a422489e98323))
* **mcp:** return correct lines on typescript errors ([9bbcb41](https://github.com/brandnholl/doge-sdk/commit/9bbcb41d076d38e3026201dfc67e704dfe302caa))


### Chores

* **client:** fix logger property type ([39c3542](https://github.com/brandnholl/doge-sdk/commit/39c35426003203929353c57a0f2d2da71d3728e1))
* **internal:** codegen related update ([a2f90fd](https://github.com/brandnholl/doge-sdk/commit/a2f90fdb43ac5cff17ac82dd1300cd8492f78543))
* **internal:** codegen related update ([a9cfe4c](https://github.com/brandnholl/doge-sdk/commit/a9cfe4c1da6e9d5e65daad2edbab9203c4cf2c58))
* **internal:** codegen related update ([6d3fb3d](https://github.com/brandnholl/doge-sdk/commit/6d3fb3dd91e378a206e3b83ae516bfe7343db7d5))
* **internal:** upgrade eslint ([b1a9600](https://github.com/brandnholl/doge-sdk/commit/b1a9600c1ed81b4dd2e78db9e7af02beadf387f7))

## 2.3.0 (2025-08-23)

Full Changelog: [v2.2.2...v2.3.0](https://github.com/brandnholl/doge-sdk/compare/v2.2.2...v2.3.0)

### Features

* **mcp:** add code execution tool ([90cad26](https://github.com/brandnholl/doge-sdk/commit/90cad26e76e63bd447648ba7c515cb67c7c3e369))


### Chores

* add docs to RequestOptions type ([9be0ef1](https://github.com/brandnholl/doge-sdk/commit/9be0ef1f283d522dfbe1376c4be8ee4f4d9b819b))
* add package to package.json ([6ab513c](https://github.com/brandnholl/doge-sdk/commit/6ab513cee3aa68f2cf6899a7fb7fbb839e1204c2))
* **ci:** only run for pushes and fork pull requests ([eb23f34](https://github.com/brandnholl/doge-sdk/commit/eb23f346fb95e58376a48e2ac93033c9897ca165))
* **client:** improve path param validation ([f9d251a](https://github.com/brandnholl/doge-sdk/commit/f9d251ab834a00ec9495dd0f4553c3618c429153))
* **client:** qualify global Blob ([759a5f0](https://github.com/brandnholl/doge-sdk/commit/759a5f0773d5d42191ec8d5290035178e10cd6dd))
* **deps:** update dependency @types/node to v20.17.58 ([4e23718](https://github.com/brandnholl/doge-sdk/commit/4e23718298941fad29a0abb075c20089bd80c1cb))
* **internal:** codegen related update ([013f0f2](https://github.com/brandnholl/doge-sdk/commit/013f0f2be0750728ca300139315f811f3a5055ee))
* **internal:** codegen related update ([43e6da7](https://github.com/brandnholl/doge-sdk/commit/43e6da76686c635a1dc91466fa1a108dd02c135c))
* **internal:** formatting change ([5a2b3b2](https://github.com/brandnholl/doge-sdk/commit/5a2b3b22a66804ad288b89bb05707975027870b0))
* **internal:** move publish config ([ff24ca3](https://github.com/brandnholl/doge-sdk/commit/ff24ca320f9ff0657beae1033b5eedbda5ad1221))
* **internal:** remove redundant imports config ([2d71484](https://github.com/brandnholl/doge-sdk/commit/2d714841c5ba62193dac1cff964dba205ac88447))
* **internal:** update comment in script ([461fc95](https://github.com/brandnholl/doge-sdk/commit/461fc9522745b2316a174efd00e4c35a5c1350ce))
* **internal:** version bump ([5b667ae](https://github.com/brandnholl/doge-sdk/commit/5b667aef27450f2f9f45a2cccd5f2167d3398cf3))
* make some internal functions async ([9b4a872](https://github.com/brandnholl/doge-sdk/commit/9b4a872a51d1a0891adb1889766e70ebf194978c))
* **ts:** reorder package.json imports ([5b134e1](https://github.com/brandnholl/doge-sdk/commit/5b134e1610bb4674ea5695e593e929954e518745))
* update @stainless-api/prism-cli to v5.15.0 ([461e3c3](https://github.com/brandnholl/doge-sdk/commit/461e3c3899a4269e548c28f6408d01ed482ca2f2))
* update CI script ([53dd5b4](https://github.com/brandnholl/doge-sdk/commit/53dd5b401242cf246789104a5a33d10cba495d49))

## 2.2.2 (2025-06-27)

Full Changelog: [v2.2.1...v2.2.2](https://github.com/brandnholl/doge-sdk/compare/v2.2.1...v2.2.2)

### Bug Fixes

* **client:** get fetchOptions type more reliably ([ad99f44](https://github.com/brandnholl/doge-sdk/commit/ad99f44ac15f35e4ec070e684977463c9636249f))

## 2.2.1 (2025-06-27)

Full Changelog: [v2.2.0...v2.2.1](https://github.com/brandnholl/doge-sdk/compare/v2.2.0...v2.2.1)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([a9e16f8](https://github.com/brandnholl/doge-sdk/commit/a9e16f837e52d02a42f4c344852d75998435a263))

## 2.2.0 (2025-06-21)

Full Changelog: [v2.1.25...v2.2.0](https://github.com/brandnholl/doge-sdk/compare/v2.1.25...v2.2.0)

### Features

* **client:** add support for endpoint-specific base URLs ([b5040f5](https://github.com/brandnholl/doge-sdk/commit/b5040f52a6c9d6c9f7638eb6ff04dc9a654d3b71))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([6c21068](https://github.com/brandnholl/doge-sdk/commit/6c21068ad0d9867cc2e1b699e77b3f942b29e5f4))


### Chores

* **ci:** enable for pull requests ([1380746](https://github.com/brandnholl/doge-sdk/commit/13807464a1976000ae72e0aaec0c79d63f035a93))
* **client:** refactor imports ([9885275](https://github.com/brandnholl/doge-sdk/commit/988527579c115f2838114918a852dc38101bb205))
* **readme:** update badges ([53f7f57](https://github.com/brandnholl/doge-sdk/commit/53f7f57cf6145313b292b97df6f88fe9ebb1a4b7))
* **readme:** use better example snippet for undocumented params ([1f5b98b](https://github.com/brandnholl/doge-sdk/commit/1f5b98b312ded5f628dd292bd3d10edfd0008fbc))

## 2.1.25 (2025-06-14)

Full Changelog: [v0.0.1-alpha.1...v2.1.25](https://github.com/brandnholl/doge-sdk/compare/v0.0.1-alpha.1...v2.1.25)

### Bug Fixes

* publish script — handle NPM errors correctly ([0c934ac](https://github.com/brandnholl/doge-sdk/commit/0c934acb239469d35def6c3d57a00e1986ebd38e))


### Chores

* **internal:** add pure annotations, make base APIResource abstract ([7f531ca](https://github.com/brandnholl/doge-sdk/commit/7f531cafe94abb9dad62e311b3e6c5b080c19729))

## 0.0.1-alpha.1 (2025-06-10)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/brandnholl/doge-sdk/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* update SDK settings ([e61d502](https://github.com/brandnholl/doge-sdk/commit/e61d502c5f995a327da72093ad819d2762f801a8))
* update SDK settings ([953bf64](https://github.com/brandnholl/doge-sdk/commit/953bf649b55bfd2fe8fd7cdb6cfcf8c7d81ababb))
