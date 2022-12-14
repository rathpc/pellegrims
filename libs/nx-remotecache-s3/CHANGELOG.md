# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# 1.0.0 (2022-12-14)

### Bug Fixes

- **nx-remotecache-s3:** add package dependencies ([c15e608](https://github.com/rathpc/pellegrims/commit/c15e60834b5e6bde995e23138d487d3229957d85)), closes [#88](https://github.com/rathpc/pellegrims/issues/88)
- **nx-remotecache-s3:** bucket name from environment variable ([#53](https://github.com/rathpc/pellegrims/issues/53)) ([21f6525](https://github.com/rathpc/pellegrims/commit/21f6525d02e0a97995ffe9eaa553a88f6cdf09b5))
- **nx-remotecache-s3:** fallback to aws-sdk-v3 credentials provider ([d6ba139](https://github.com/rathpc/pellegrims/commit/d6ba139fc21f7f86a39e351cfb72b4c925c4f264))
- **nx-remotecache-s3:** fix 403 error handling for fileExists ([79b6532](https://github.com/rathpc/pellegrims/commit/79b65324d36c8bd800e82bbb28dd8efb9d5255b4))
- **nx-remotecache-s3:** generated package.json is pinning all dependency versions ([f269201](https://github.com/rathpc/pellegrims/commit/f26920146e4312b0b0e8295ea8020692d695c005)), closes [#181](https://github.com/rathpc/pellegrims/issues/181)
- **nx-remotecache-s3:** missing peer dependency on @nrwl/workspace ([585cc40](https://github.com/rathpc/pellegrims/commit/585cc405efa953a90f8141da8db445821b56c4fe)), closes [#156](https://github.com/rathpc/pellegrims/issues/156)
- **nx-remotecache-s3:** options.forcePathStyle and options.readOnly are never used ([9f90d13](https://github.com/rathpc/pellegrims/commit/9f90d13fefeed5d330d81d4e803a02cd214e558e)), closes [#183](https://github.com/rathpc/pellegrims/issues/183)
- **nx-remotecache-s3:** update env boolean handling and error handling ([#174](https://github.com/rathpc/pellegrims/issues/174)) ([6ff3a4a](https://github.com/rathpc/pellegrims/commit/6ff3a4ad2e44d5dae35f66fcbb11e8a8a415c334))

### Features

- **nx-remotecache-s3:** add custom profile option ([bdbda58](https://github.com/rathpc/pellegrims/commit/bdbda58b87d8b73e27cc20604e6800796e3f12d1))
- **nx-remotecache-s3:** add force path style capability to S3Options ([3a778c4](https://github.com/rathpc/pellegrims/commit/3a778c40fb786110de569080a031d0f88ade075d))
- **nx-remotecache-s3:** add prefix path option ([bbf1727](https://github.com/rathpc/pellegrims/commit/bbf172729779546d0e03eaae310c5164a231304d))
- **nx-remotecache-s3:** add readonly option ([9cb9b37](https://github.com/rathpc/pellegrims/commit/9cb9b37d8bfe6043163ed43e1bd5df48794b358d))
- **nx-remotecache-s3:** Add support for aws profile credential resolution. ([#93](https://github.com/rathpc/pellegrims/issues/93)) ([c8e295b](https://github.com/rathpc/pellegrims/commit/c8e295b0a1174470b93651b74b7b194012b107ea))
- **nx-remotecache-s3:** add support for options.profile ([ba04295](https://github.com/rathpc/pellegrims/commit/ba0429572c1e5b76987cc37808a483e2567ccede))
- **nx-remotecache-s3:** fix typo in readme ([08d9264](https://github.com/rathpc/pellegrims/commit/08d92647571d41d1c26382a20a0f8cc6e536eb44))
- **nx-remotecache-s3:** initial implementation ([b0c6244](https://github.com/rathpc/pellegrims/commit/b0c6244da47cdad7aefca4329e01b366bd11abe5))
- **nx-remotecache-s3:** revert package.json change ([af007df](https://github.com/rathpc/pellegrims/commit/af007df5018ceb660d74b9241b7c18457045babf))
- **nx-remotecache-s3:** swap to standard AWS credentials ([#100](https://github.com/rathpc/pellegrims/issues/100)) ([5e8038e](https://github.com/rathpc/pellegrims/commit/5e8038efecfbb3485fdecf589146472bdacde937)), closes [#95](https://github.com/rathpc/pellegrims/issues/95)

### BREAKING CHANGES

- **nx-remotecache-s3:** authentication is now handled by @aws-sdk/credential-provider-node

Following environment variables were removed:

- NX_CACHE_S3_ACCESS_KEY_ID (replace by AWS_ACCESS_KEY_ID)
- NX_CACHE_S3_SECRET_KEY (replace by AWS_SECRET_ACCESS_KEY)
- NX_CACHE_S3_PROFILE

## [1.4.7](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.6...nx-remotecache-s3-1.4.7) (2022-12-13)

## [1.4.6](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.5...nx-remotecache-s3-1.4.6) (2022-12-12)

### Bug Fixes

- **nx-remotecache-s3:** options.forcePathStyle and options.readOnly are never used ([9f90d13](https://github.com/robinpellegrims/pellegrims/commit/9f90d13fefeed5d330d81d4e803a02cd214e558e)), closes [#183](https://github.com/robinpellegrims/pellegrims/issues/183)

## [1.4.5](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.4...nx-remotecache-s3-1.4.5) (2022-12-04)

### Bug Fixes

- **nx-remotecache-s3:** generated package.json is pinning all dependency versions ([f269201](https://github.com/robinpellegrims/pellegrims/commit/f26920146e4312b0b0e8295ea8020692d695c005)), closes [#181](https://github.com/robinpellegrims/pellegrims/issues/181)

## [1.4.4](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.3...nx-remotecache-s3-1.4.4) (2022-11-27)

## [1.4.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.2...nx-remotecache-s3-1.4.3) (2022-11-13)

## [1.4.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.1...nx-remotecache-s3-1.4.2) (2022-11-02)

### Bug Fixes

- **nx-remotecache-s3:** fix 403 error handling for fileExists ([79b6532](https://github.com/robinpellegrims/pellegrims/commit/79b65324d36c8bd800e82bbb28dd8efb9d5255b4))

## [1.4.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.4.0...nx-remotecache-s3-1.4.1) (2022-11-02)

### Bug Fixes

- **nx-remotecache-s3:** update env boolean handling and error handling ([#174](https://github.com/robinpellegrims/pellegrims/issues/174)) ([6ff3a4a](https://github.com/robinpellegrims/pellegrims/commit/6ff3a4ad2e44d5dae35f66fcbb11e8a8a415c334))

# [1.4.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.3.0...nx-remotecache-s3-1.4.0) (2022-11-01)

### Features

- **nx-remotecache-s3:** add readonly option ([9cb9b37](https://github.com/robinpellegrims/pellegrims/commit/9cb9b37d8bfe6043163ed43e1bd5df48794b358d))

# [1.3.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.2.3...nx-remotecache-s3-1.3.0) (2022-10-26)

### Features

- **nx-remotecache-s3:** add force path style capability to S3Options ([3a778c4](https://github.com/robinpellegrims/pellegrims/commit/3a778c40fb786110de569080a031d0f88ade075d))

## [1.2.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.2.2...nx-remotecache-s3-1.2.3) (2022-10-01)

## [1.2.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.2.1...nx-remotecache-s3-1.2.2) (2022-09-21)

### Bug Fixes

- **nx-remotecache-s3:** missing peer dependency on @nrwl/workspace ([585cc40](https://github.com/robinpellegrims/pellegrims/commit/585cc405efa953a90f8141da8db445821b56c4fe)), closes [#156](https://github.com/robinpellegrims/pellegrims/issues/156)

## [1.2.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.2.0...nx-remotecache-s3-1.2.1) (2022-09-14)

## [1.2.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.2.0...nx-remotecache-s3-1.2.1) (2022-09-05)

## [1.2.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.2.0...nx-remotecache-s3-1.2.1) (2022-09-04)

# [1.2.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.1.1...nx-remotecache-s3-1.2.0) (2022-08-29)

### Features

- **nx-remotecache-s3:** add support for options.profile ([ba04295](https://github.com/robinpellegrims/pellegrims/commit/ba0429572c1e5b76987cc37808a483e2567ccede))

## [1.1.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.1.0...nx-remotecache-s3-1.1.1) (2022-08-26)

# [1.1.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.6...nx-remotecache-s3-1.1.0) (2022-08-26)

### Features

- **nx-remotecache-s3:** add custom profile option ([bdbda58](https://github.com/robinpellegrims/pellegrims/commit/bdbda58b87d8b73e27cc20604e6800796e3f12d1))

## [1.0.6](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.5...nx-remotecache-s3-1.0.6) (2022-07-10)

## [1.0.5](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.4...nx-remotecache-s3-1.0.5) (2022-06-19)

## [1.0.4](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.3...nx-remotecache-s3-1.0.4) (2022-06-18)

## [1.0.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.2...nx-remotecache-s3-1.0.3) (2022-06-13)

## [1.0.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.1...nx-remotecache-s3-1.0.2) (2022-06-03)

## [1.0.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-1.0.0...nx-remotecache-s3-1.0.1) (2022-04-25)

# [1.0.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.3.1...nx-remotecache-s3-1.0.0) (2022-04-25)

### Features

- **nx-remotecache-s3:** swap to standard AWS credentials ([#100](https://github.com/robinpellegrims/pellegrims/issues/100)) ([5e8038e](https://github.com/robinpellegrims/pellegrims/commit/5e8038efecfbb3485fdecf589146472bdacde937)), closes [#95](https://github.com/robinpellegrims/pellegrims/issues/95)

### BREAKING CHANGES

- **nx-remotecache-s3:** authentication is now handled by @aws-sdk/credential-provider-node

Following environment variables were removed:

- NX_CACHE_S3_ACCESS_KEY_ID (replace by AWS_ACCESS_KEY_ID)
- NX_CACHE_S3_SECRET_KEY (replace by AWS_SECRET_ACCESS_KEY)
- NX_CACHE_S3_PROFILE

## [0.3.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.3.0...nx-remotecache-s3-0.3.1) (2022-04-24)

# [0.3.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.3...nx-remotecache-s3-0.3.0) (2022-04-24)

### Features

- **nx-remotecache-s3:** Add support for aws profile credential resolution. ([#93](https://github.com/robinpellegrims/pellegrims/issues/93)) ([c8e295b](https://github.com/robinpellegrims/pellegrims/commit/c8e295b0a1174470b93651b74b7b194012b107ea))

## [0.2.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.2...nx-remotecache-s3-0.2.3) (2022-04-19)

## [0.2.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.1...nx-remotecache-s3-0.2.2) (2022-04-19)

### Bug Fixes

- **nx-remotecache-s3:** add package dependencies ([c15e608](https://github.com/robinpellegrims/pellegrims/commit/c15e60834b5e6bde995e23138d487d3229957d85)), closes [#88](https://github.com/robinpellegrims/pellegrims/issues/88)

## [0.2.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.2.0...nx-remotecache-s3-0.2.1) (2022-04-13)

# [0.2.0](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.8...nx-remotecache-s3-0.2.0) (2022-02-18)

### Bug Fixes

- **nx-remotecache-s3:** fallback to aws-sdk-v3 credentials provider ([d6ba139](https://github.com/robinpellegrims/pellegrims/commit/d6ba139fc21f7f86a39e351cfb72b4c925c4f264))

### Features

- **nx-remotecache-s3:** add prefix path option ([bbf1727](https://github.com/robinpellegrims/pellegrims/commit/bbf172729779546d0e03eaae310c5164a231304d))

## [0.1.8](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.7...nx-remotecache-s3-0.1.8) (2022-02-04)

## [0.1.7](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.6...nx-remotecache-s3-0.1.7) (2021-12-20)

### Bug Fixes

- **nx-remotecache-s3:** bucket name from environment variable ([#53](https://github.com/robinpellegrims/pellegrims/issues/53)) ([21f6525](https://github.com/robinpellegrims/pellegrims/commit/21f6525d02e0a97995ffe9eaa553a88f6cdf09b5))

## [0.1.6](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.5...nx-remotecache-s3-0.1.6) (2021-12-09)

## [0.1.5](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.4...nx-remotecache-s3-0.1.5) (2021-11-19)

## [0.1.4](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.3...nx-remotecache-s3-0.1.4) (2021-11-19)

## [0.1.3](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.2...nx-remotecache-s3-0.1.3) (2021-11-18)

## [0.1.2](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.1...nx-remotecache-s3-0.1.2) (2021-11-07)

## [0.1.1](https://github.com/robinpellegrims/pellegrims/compare/nx-remotecache-s3-0.1.0...nx-remotecache-s3-0.1.1) (2021-11-07)

# 0.1.0 (2021-11-07)

### Features

- **nx-remotecache-s3:** initial implementation ([b0c6244](https://github.com/robinpellegrims/pellegrims/commit/b0c6244da47cdad7aefca4329e01b366bd11abe5))
