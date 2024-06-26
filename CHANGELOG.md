# Changelog

## [0.5.1](https://github.com/joshtenorio/glassypdm-client/compare/v0.5.0...v0.5.1) (2024-04-10)


### Miscellaneous

* bump tauri version ([7b62a88](https://github.com/joshtenorio/glassypdm-client/commit/7b62a889b06866852ffc7cb0a177e3be1e320eaa))

## [0.5.0](https://github.com/joshtenorio/glassypdm-client/compare/v0.4.0...v0.5.0) (2024-02-20)


### Features

* add notification if upload goes wrong ([373e9cf](https://github.com/joshtenorio/glassypdm-client/commit/373e9cf286bbc38a94071e57155bd0d1a3a77776))
* hash project directory while downloading files ([2282b85](https://github.com/joshtenorio/glassypdm-client/commit/2282b8508e895e97c69b61c75d893bb713e56afb))
* server status is displayed on sidebar ([f05471c](https://github.com/joshtenorio/glassypdm-client/commit/f05471c6ac54cee4e37897759fa52740e26ce3b7))
* setup logging, add buttons for viewing log directory ([d6ca311](https://github.com/joshtenorio/glassypdm-client/commit/d6ca3119b40e21ead474e743b7187ef87a8ea397))
* update base hash while uploading ([9cacd46](https://github.com/joshtenorio/glassypdm-client/commit/9cacd4660309fb8636fbbfe96801880cb9702116))


### Bug Fixes

* file count total when resetting updated files is now correct ([9f4d0f5](https://github.com/joshtenorio/glassypdm-client/commit/9f4d0f5807b28068d34ff1410d799ad4818f6b1f))
* send change type on file created/modified ([1cde21c](https://github.com/joshtenorio/glassypdm-client/commit/1cde21c7be2320772d5a2b51845ae5faeeeccf90))
* styling in download/upload pages ([b5a980d](https://github.com/joshtenorio/glassypdm-client/commit/b5a980d7f5f4f166061737145640bb7e45117713))


### Miscellaneous

* a single instance of glassyPDM running at a time is now ensured ([822ac2d](https://github.com/joshtenorio/glassypdm-client/commit/822ac2dde958227c660ea7f4a1eac343bdcaccda))
* breaking up main.rs into different files ([0f55bda](https://github.com/joshtenorio/glassypdm-client/commit/0f55bda0c99253852d72cb0b931c43a9b86b4477))
* client doesn't freeze up while uploading files ([7eefafb](https://github.com/joshtenorio/glassypdm-client/commit/7eefafb5d90923732766ed4af7ca6c7d59a56ce5))
* implement concurrent downloads ([c912075](https://github.com/joshtenorio/glassypdm-client/commit/c9120753e1893f77d9b4c726055d5a6fe29564d6))
* millisecond timers are rounded ([b6eb231](https://github.com/joshtenorio/glassypdm-client/commit/b6eb2316f715f4eb8c593dbff4bd8dd07ea7e534))
* move sync logic to rust ([2c50092](https://github.com/joshtenorio/glassypdm-client/commit/2c50092f1ba4fe562a36b574068e61cf0381945d))
* Re-format settings page ([aa5a77d](https://github.com/joshtenorio/glassypdm-client/commit/aa5a77da893fe90e56c6392060a4917888072140))
* redesign workbench page ([fddd871](https://github.com/joshtenorio/glassypdm-client/commit/fddd871d22f70f7d06f9897c793819018a33a4e6))
* rewrite more upload/reset logic to rust ([46a5111](https://github.com/joshtenorio/glassypdm-client/commit/46a5111477812251c63073dba992844bfb8c91ec))
* update local s3 key store when syncing ([754c885](https://github.com/joshtenorio/glassypdm-client/commit/754c885d87db89c98341bb41eda124fac8c192ba))
* use constants for app data files and use update function ([0d1617d](https://github.com/joshtenorio/glassypdm-client/commit/0d1617d0e9191ad8482c5f14b46649b1f684e1e9))

## [0.4.0](https://github.com/joshtenorio/glassypdm-client/compare/v0.3.0...v0.4.0) (2023-11-05)


### Features

* Add delete local data button for debug/quick resets ([243545f](https://github.com/joshtenorio/glassypdm-client/commit/243545fe01505d7e85a3b36f9ea984c6ab582e83))
* improve download feedback ([e45ccad](https://github.com/joshtenorio/glassypdm-client/commit/e45ccad6cc9c5047227203545580d31b1dc4944b))
* Improve upload page feedback and make it take the entire window ([a5c1118](https://github.com/joshtenorio/glassypdm-client/commit/a5c111891e8ffc7d518d945306c893939a31249b))
* Upload change type to server ([54d7868](https://github.com/joshtenorio/glassypdm-client/commit/54d7868479a2964dfb0e914d961f98839a9cd33e))


### Bug Fixes

* Properly update toDownload.json when downloading ([ebf5c23](https://github.com/joshtenorio/glassypdm-client/commit/ebf5c23ec0fd3f5892c04f23aededaae845a524e))


### Miscellaneous

* improve download speed ([2f10abe](https://github.com/joshtenorio/glassypdm-client/commit/2f10abe8f829ddf7f806c4ffcf8488fd0666b0f7))

## [0.3.0](https://github.com/joshtenorio/glassypdm-client/compare/v0.2.0...v0.3.0) (2023-10-26)


### Features

* disable actions while downloading/uploading/setting permission ([ac31295](https://github.com/joshtenorio/glassypdm-client/commit/ac31295806e9ca071dc20d8715aae5418f307a89))
* project directory is set without hitting save changes ([fb028f3](https://github.com/joshtenorio/glassypdm-client/commit/fb028f3863cc148c993e4c26e0609e0d7711cc59))
* project history is a little smarter ([6fea5c7](https://github.com/joshtenorio/glassypdm-client/commit/6fea5c7fe2bf92922f35b0832b308e8359247c5f))


### Bug Fixes

* Conflict dialog has a scrollbar now ([e815a0d](https://github.com/joshtenorio/glassypdm-client/commit/e815a0dcb717efb39048621c94f71847cccd6fbf))
* files marked for uploading are ignored when downloading new changes ([cf97efc](https://github.com/joshtenorio/glassypdm-client/commit/cf97efc5a5a2471203bac383bf548831cd65b2e7))


### Miscellaneous

* handle more invalid server url inputs ([78fc10d](https://github.com/joshtenorio/glassypdm-client/commit/78fc10d9b0e67900e26838fc7f7a03b86121432f))

## [0.2.0](https://github.com/joshtenorio/glassypdm-client/compare/v0.1.1...v0.2.0) (2023-10-11)


### Features

* detect file conflicts ([f9bf147](https://github.com/joshtenorio/glassypdm-client/commit/f9bf14735a3a9b1990c39d4ebf98194a433b0585))
* eligible users can set permissions for others ([9ebb67b](https://github.com/joshtenorio/glassypdm-client/commit/9ebb67bda13572a0dec849d5c53f16bd39c3c535))
* Open project folder button ([6c846c5](https://github.com/joshtenorio/glassypdm-client/commit/6c846c5c83b017fd9b70c89a1dbaf3029f348fb5))
* open project website button ([62aa638](https://github.com/joshtenorio/glassypdm-client/commit/62aa63847288fa63de36237c7b4af758a6475f24))
* prevent uploads if user doesn't have write permissions ([09177b9](https://github.com/joshtenorio/glassypdm-client/commit/09177b9844e69321e296ad87646db972c440e36e))
* prevent workspace actions if client is outdated ([da9ac65](https://github.com/joshtenorio/glassypdm-client/commit/da9ac65e74c91d694d762bca509dcf80758c9801))
* save s3key on file upload ([a9e1dbb](https://github.com/joshtenorio/glassypdm-client/commit/a9e1dbb16e79d5257c51f262158143a923ebfad3))


### Bug Fixes

* reset file to proper revision ([0cbdec7](https://github.com/joshtenorio/glassypdm-client/commit/0cbdec78ffa1a3b364910931a4201e66471fd1bf))

## [0.1.1](https://github.com/joshtenorio/glassypdm-client/compare/v0.1.0...v0.1.1) (2023-10-07)


### Bug Fixes

* json files are cleared before writing ([6e2dbd3](https://github.com/joshtenorio/glassypdm-client/commit/6e2dbd3223e1bc739a40c4342e737f26f870168d))

## [0.1.0](https://github.com/joshtenorio/glassypdm-client/compare/v0.1.0-1...v0.1.0) (2023-10-06)


### Features

* about page ([5e5d901](https://github.com/joshtenorio/glassypdm-client/commit/5e5d901ee5a5643cb5042bd7defca6942409456c))
* allow for resetting files ([07af101](https://github.com/joshtenorio/glassypdm-client/commit/07af10132e3097a95451dc51696ab23745fc9d95))
* authentication with clerk ([a5aacb0](https://github.com/joshtenorio/glassypdm-client/commit/a5aacb09b286e6fda66c6968fccff7a73430814b))
* break out config into client settings page ([bb4e311](https://github.com/joshtenorio/glassypdm-client/commit/bb4e3110bb1ab2959a8b32d63d3d9c888d083a85))
* download files page ([12eab57](https://github.com/joshtenorio/glassypdm-client/commit/12eab57bda55147712f814cf397a5d5b7b0e9f55))
* initialize download state in workbench page ([4f2e31d](https://github.com/joshtenorio/glassypdm-client/commit/4f2e31d9a326353ccf97635909212c05bf4add68))
* notification popup when settings are saved ([135c714](https://github.com/joshtenorio/glassypdm-client/commit/135c714be8f7855dbd36a9eeca8df67a187ab94f))
* redirect to settings if client is unconfigured ([76b926b](https://github.com/joshtenorio/glassypdm-client/commit/76b926b0851edc6faa98bbfb030af81fa0e88af3))
* show 3 most recent commits ([300e193](https://github.com/joshtenorio/glassypdm-client/commit/300e193dbf7d9b193fd63fd9854a7fddd71c09ed))
* sidebar buttons use NavLink instead of Link ([3f6dbe2](https://github.com/joshtenorio/glassypdm-client/commit/3f6dbe25edd10c1df82f1c1e1429e03a192c66bb))
* split app into pages ([2d27c2a](https://github.com/joshtenorio/glassypdm-client/commit/2d27c2a08a1ab856d67fe1fe43b9d5b629edc562))
* UI feedback when syncing with server ([b880fd8](https://github.com/joshtenorio/glassypdm-client/commit/b880fd8762aae2485c04ee7faf35369896e34792))
* upload files page ([d3fd059](https://github.com/joshtenorio/glassypdm-client/commit/d3fd0591dd42779842c111848792287d65345278))
* Upload page UI complete ([92dd5f7](https://github.com/joshtenorio/glassypdm-client/commit/92dd5f713fe095a0e78972bffbf0c960e602c505))


### Bug Fixes

* successful sign in no longer leads to 404 ([16cff9e](https://github.com/joshtenorio/glassypdm-client/commit/16cff9e1f78652c405169822b7dcb76cbc4c9502))

## 0.1.0-1 (2023-09-27)


### Features

* initial alpha version ([edeef15](https://github.com/joshtenorio/glassypdm-client/commit/edeef1530834e7d244576c65f18f2b390bd69d45))
