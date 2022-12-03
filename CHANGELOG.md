# [2.0.0-next.1](https://github.com/ntix/parsing/compare/v1.0.2...v2.0.0-next.1) (2022-12-03)


### Bug Fixes

* **nullable:** add nullable and allow undefined, other failure results normalise to null ([785d998](https://github.com/ntix/parsing/commit/785d9989725068873be33e0e1676e61814a4ed1a))
* **parsing:** It.If => If ([7bd9380](https://github.com/ntix/parsing/commit/7bd9380b6afc61547137f9d1747179c940e6d1c2))
* **parsing:** type (private var) ([1141b34](https://github.com/ntix/parsing/commit/1141b34800835be1db716410eafe288f70fd0fa8))
* **parsing:** type ParseErrors ([8f12c13](https://github.com/ntix/parsing/commit/8f12c13c0b1b08255cb57e352f332fe3cd1de671))


### Code Refactoring

* **parsing:** change 'for' and 'complex' to 'object' ([3a1c224](https://github.com/ntix/parsing/commit/3a1c224ede388c077796bdb2debe2e8da4e9a222))
* **parsing:** move util functions to avoid circular refs ([eb94bda](https://github.com/ntix/parsing/commit/eb94bda14422326284c78a1dcce9127324edefbd))


### Features

* **defined:** check for value not being undefined, allowing null or empty string ([d418184](https://github.com/ntix/parsing/commit/d4181842bb5daad94514aa5bbc2cfae4034df5ae))
* **parsing:** hasParseErrors helper mehod to check for parse errors ([ef5eab0](https://github.com/ntix/parsing/commit/ef5eab053503ea8750b7062b8e9a8f2b07f7c8d3))
* **parsing:** if conditional parse ([b9919d7](https://github.com/ntix/parsing/commit/b9919d7d85bf8e422993d0f5c3cefbd3150370ba))
* **parsing:** ParseErrorCallback for bespoke errors on 'use' parser ([44f8586](https://github.com/ntix/parsing/commit/44f85864282677b05d6091f9a3c3106ba6d21f01))


### BREAKING CHANGES

* **parsing:** complex api change
* **parsing:** ensureDateArray => parseDateArray
* **parsing:** anyOf => oneOf

## [1.0.2](https://github.com/ntix/parsing/compare/v1.0.1...v1.0.2) (2022-11-12)


### Bug Fixes

* **build:** sync package lock ([bf9e638](https://github.com/ntix/parsing/commit/bf9e63882f1dff579437b368274a71bfcec908ab))
* **dates:** when browser parse/format is different for day/month position ([97a413d](https://github.com/ntix/parsing/commit/97a413d8f111281a61492b246fdbcafa0b1a5dec))

## [1.0.1](https://github.com/ntix/parsing/compare/v1.0.0...v1.0.1) (2022-10-22)


### Bug Fixes

* **parsing:** NextBuilder add/remove methods ([d1d1657](https://github.com/ntix/parsing/commit/d1d16577c1b17f5444920804ddcaa5c46e902e35))

# 1.0.0 (2022-10-05)


### Bug Fixes

* **parse:** correct min/max chaining ([4978597](https://github.com/ntix/parsing/commit/4978597f4747c1b087130f1b505a203c435fd005))
* **parsing:** strings ignore case ([#6](https://github.com/ntix/parsing/issues/6)) ([87c82a7](https://github.com/ntix/parsing/commit/87c82a74a99d3ebb2cb81a4105189bcb3629ebcd))


### Features

* **dates:** wip ([194fb35](https://github.com/ntix/parsing/commit/194fb35cac808fe7b87811c54036fae19a496387))
* **numbers:** basic framework with number parsing and validation ([d7695fd](https://github.com/ntix/parsing/commit/d7695fd01ce408f934307932838fa67ab4416eba))
* **parse:** anyOf array/enum ([a47cffa](https://github.com/ntix/parsing/commit/a47cffa123d9c02945f4ed876c77e6f80ccbd413))
* **parsing:** allow modular use of parsers ([94bd433](https://github.com/ntix/parsing/commit/94bd4336d942a716cc482333f3c864699fb75958))
* **parsing:** arrays basic support ([da96719](https://github.com/ntix/parsing/commit/da96719f8b4fc15431c11b730d19f5d65e8503f5))
* **parsing:** booleans ([dc536a3](https://github.com/ntix/parsing/commit/dc536a3ec9cdc06d2402efa5fd7619ce3619d84d))
* **parsing:** not validation ([c477d2b](https://github.com/ntix/parsing/commit/c477d2b91a2f3124c91d0036326e28868b2f02ce))
* **parsing:** object parsing ([adc6f84](https://github.com/ntix/parsing/commit/adc6f84768aec89ff9f6d2a6775d2876ca5a55a0))
