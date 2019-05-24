## Contributing to Devconzm

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a contributor

### We Use Github Flow, So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use Github Flow). We actively welcome your pull requests:

1. Fork the repo and create your branch from master.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Issue that pull request!

### Basic guide for a successful contribution

Fork this repo using the button in the right corner of this page.

**Note:** If you are contributing to docs, you don't need the following steps, you can make use of Github text editor in the browser.

Clone your forked repo

`git clone https://github.com/your-username/devconzm`

Before pushing anything to your fork, always

Set up the remote version

`git remote add upstream https://github.com/devconzm/devconzm`

verify that you have added and you have 2 remotes

`git remote -v`

- **origin** should point to your fork
- **upstream** should point to this repo

To Keep your fork up to date, do the following and make sure you do it everytime you want to push

`git pull upstream master`

After making changes on a specific branch, push your changes  
Always remember to create a specific branch that describes the issue you are working, and create a pull-request against the master of this repo.

`git push origin your_branch_name`

Then create a Pull Request from here, we will take a look at it and merge it as soon as we can.

> Make sure your commit messages should be clear not vague e.g "Changes and Updates made"  
> Work from a branch other than master whenever possible and branch name should be clear  
> Write clean and transparent code which is easy to maintain  
> When making PRs, give clear descriptions of the changes you made.

### Testing

`npm run test` or `yarn run test`

### linting

`npm run lint` or `yarn run lint`

Before you make commit, make sure that the linting are passing, check with the eslintrc.yml to check the rules.

### Report bugs using Github's issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/devconzm/devconzm/issues); it's that easy!

### License

By contributing, you agree that your contributions will be licensed under its MIT License.
