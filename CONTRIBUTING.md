# Contributing to PX Blue

Thank you for helping to make these projects great and being a part of the PX Blue community. Here are a few guidelines that will help you along the way.

## Code of Conduct

PX Blue has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the document](https://github.com/pxblue/.github/blob/master/CODE_OF_CONDUCT.md) so that you can understand what will and will not be tolerated.

## Contributions

There are many ways to contribute to PX Blue and code contribution is one aspect of it. Documentation improvements are as important as code changes.

-   Report and fixing bugs, adding features, and improving our documentation.
-   Add new code examples or new component examples.
-   Help translate and update the API documentation.

## Your first Pull Request

If you decide to fix an issue, please check the comments in the issues section on the repository in case somebody is already working on a fix. If nobody is working on it, please leave a comment stating that you have started to work on it so other people don’t accidentally duplicate your effort. If you decide to fix an issue that has not been logged, please log the issue first so the PX Blue community knows work is being contributed.

## Sending a Pull Request

PX Blue is a community with many projects, so pull requests are always welcome. If you are working on a complete change, please open an issue first to discuss it with the maintainers of PX Blue. Keep pull requests small to have the best chance of getting accepted.

```
Don't bundle more than one feature or bug fix per pull request.
```

## Get started

1. Fork the PX Blue repository to your GitHub account.

2. Clone the fork repository to your local machine and add upstream remote:

```
git clone https://github.com/<your-user-id>/<repository> -b <branch-name>
cd to repository
git remote add upstream https://github.com/pxblue/<repository-name>
```

3. Synchronize your local branch with the upstream one:

```
git pull upstream <branch>
```

4. Install the dependencies:

```
yarn install
```

5. Create a new branch:

```
git checkout -b feature/my-topic-branch
Or
git checkout -b bug/my-topic-branch
```

6. Make changes, commit and push to your fork:

```
git push –set upstream origin <your branch name>
```

7. Go to [the repository](https://github.com/pxblue) and make a Pull Request.

The maintainers of PX Blue will be notified and will review your pull request and either merge it, request changes to it or close it with an explanation.

### How to increase the chance of being accepted?

Circle CI runs a series of checks automatically when a Pull Request is opened. If you're not
sure if your changes will pass, you should run available scripts located in the package.json or open a Pull Request and the GitHub build details will display a summary of the results.

Verify the following:

-   The branch is targeted at `master` for ongoing development. We do our best to keep `master` clean with all tests passing. Code that lands in `master` must be compatible with the latest stable code. It may contain additional features, but no breaking changes. We should be able to release a new minor version from the tip of `master` at any time.
-   If a feature is being added:

    -   Explain why the feature needs to be added.

-   When adding new features or modifying existing, please include tests to confirm the new behavior.
-   If props were added or prop types were changed, the TypeScript declarations are updated.

Because we will only merge Pull Request for which all tests pass. The following items also need to be checked.

-   If TypeScript declarations were changed, `yarn typescript`.
-   The code is formatted run `yarn prettier`.
-   The code is linted `yarn lint`.
-   If API documentation is being changed `TO-DO`.
-   If demos were changed `TO-DO`
-   The Pull Request title follows the pattern `TO-DO`

## Contribution Prerequisites

-   Node installed at v10.17.0+ and Yarn at v1.17.0+
-   Latest PX Blue NPM packages installed.
-   `TO-DO`

## CircleCI

`TO-DO`

## How to add a new demo and API info in the documentation?

`TO-DO`

## Get support from PX Blue

`TO-DO` (github.com/pxblue/.github/blob/master/SUPPORT.md)

## Roadmap

Want to know where PX Blue is heading or ideas on where you could contribute, take a look at the [roadmap](https://pxblue.github.io/roadmap/).

## License

By contributing to the PX Blue GitHub Organization, you agree to license your contribution under the MIT license.
