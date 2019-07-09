import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Text, Div, Anchor } from "react-atomize"
import DocsWrapper from "../../components/common/DocsWrapper"
import Highlight, { defaultProps } from "prism-react-renderer"

import codeTheme from "../../components/common/codeTheme"

const ContributingPage = () => (
  <Layout>
    <SEO title="Contributing" />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text textSize="display2" m={{ b: "4rem" }}>
          Contributing to Atomize React
        </Text>

        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Code of Conduct
        </Text>
        <Text m={{ b: "3rem" }} textColor="medium">
          We want this community to be friendly and respectful to each other.
        </Text>
        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Our Development Process
        </Text>
        <Text m={{ b: "1.5rem" }} textColor="medium">
          The core team works directly on GitHub and all work is public.
        </Text>
        <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
          Development workflow
        </Text>
        <Text m={{ b: "1.5rem" }} textColor="medium">
          Working on your first pull request? You can learn how from this free
          series:{" "}
          <Anchor
            href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
            target="_blanc"
          >
            How to Contribute to an Open Source Project on GitHub.
          </Anchor>
          <br />- Fork the repo and create your branch from master (a guide on{" "}
          <Anchor
            href="https://help.github.com/en/articles/fork-a-repo"
            target="_blanc"
          >
            how to fork a repository
          </Anchor>
          ).
          <br />
          - Run yarn bootstrap to setup the development environment.
          <br />
          - Do the changes you want and test them out in the example website
          before sending a pull request.
          <br />
        </Text>

        <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
          Commit message convention
        </Text>
        <Text m={{ b: "1.5rem" }} textColor="medium">
          We follow the{" "}
          <Anchor
            href="https://www.conventionalcommits.org/en/"
            target="_blanc"
          >
            conventional commits specification
          </Anchor>{" "}
          for our commit messages:
          <br />
          - fix: bug fixes, e.g. fix Button color on DarkTheme.
          <br />
          - feat: new features, e.g. add Snackbar component.
          <br />
          - refactor: code refactor, e.g. new folder structure for components.
          <br />
          - docs: changes into documentation, e.g. add usage example for Button.
          <br />
          - test: adding or updating tests, eg unit, snapshot testing.
          <br />
          - chore: tooling changes, e.g. change circleci config.
          <br />
          - BREAKING CHANGE: for changes that break existing usage, e.g. change
          API of a component.
          <br />
          Our pre-commit hooks verify that your commit message matches this
          format when committing.
          <br />
        </Text>

        <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
          Linting and tests
        </Text>
        <Text m={{ b: "1.5rem" }} textColor="medium">
          We use flow for type checking, eslint with prettier for linting and
          formatting the code, and jest for testing. Our pre-commit hooks verify
          that the linter and tests pass when commiting. You can also run the
          following commands manually:
          <br />
          - yarn flow: run flow on all files.
          <br />
          - yarn typescript: run tests for typescript definitions.
          <br />
          - yarn lint: lint files with eslint and prettier.
          <br />- yarn test: run unit tests with jest.
        </Text>

        <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
          Sending a pull request
        </Text>
        <Text m={{ b: "1.5rem" }} textColor="medium">
          When you're sending a pull request:
          <br />
          - Prefer small pull requests focused on one change.
          <br />
          - Verify that flow, eslint and all tests are passing.
          <br />
          - Preview the documentation to make sure it looks good.
          <br />
          - Follow the pull request template when opening a pull request.
          <br />
          <br />
          When you're working on a component:
          <br />
          - Follow the guidelines described in the official material design
          docs.
          <br />
          - Write a brief description of every prop when defining type Props to
          aid with documentation.
          <br />
          - Provide an example usage for the component (check other components
          to get a idea).
          <br />- Update the type definitions for Flow and Typescript if you
          changed an API or added a component.
        </Text>

        <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
          Sending a pull request
        </Text>
        <Text m={{ b: "0.5rem" }} textColor="medium">
          We use release-it to automate our release. If you have publish access
          to the NPM package, run the following from the master branch to
          publish a new release:
        </Text>
        <Div
          m={{ b: "0.5rem" }}
          p={{ x: "0.5rem" }}
          bg="gray200"
          rounded="lg"
          overflow="hidden"
          textColor="medium"
          fontFamily="code"
        >
          <Highlight
            {...defaultProps}
            theme={codeTheme}
            code={`yarn release`}
            language="bash"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Div>
        <Text m={{ b: "3rem" }} textColor="medium">
          NOTE: You must have a GITHUB_TOKEN environment variable available. You
          can create a GitHub access token with the "repo" access here.
        </Text>

        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Reporting issues
        </Text>
        <Text m={{ b: "3rem" }} textColor="medium">
          You can report issues on our{" "}
          <Anchor
            href="https://github.com/Proksh/atomize/issues"
            target="_blanc"
          >
            bug tracker
          </Anchor>
          . Please follow the issue template when opening an issue.
        </Text>

        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          License
        </Text>
        <Text m={{ b: "3rem" }} textColor="medium">
          By contributing to Atomize, you agree that your contributions will be
          licensed under its Atomize license.
        </Text>

        {/* <Div d="flex" bg="info200" p="1rem" rounded="md">
          <Icon
            name="InfoSolid"
            size="16px"
            m={{ r: "0.5rem", t: "0.25rem" }}
            color="info700"
          />
          <Text>You will need React v16.3 or above for atomize.</Text>
        </Div> */}
      </Div>
    </DocsWrapper>
  </Layout>
)

export default ContributingPage
