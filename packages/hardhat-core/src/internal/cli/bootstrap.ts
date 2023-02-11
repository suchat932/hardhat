#!/usr/bin/env node
import semver from "semver";
import chalk from "chalk";

const SUPPORTED_NODE_VERSIONS = ["^14.0.0", "^16.0.0", "^18.0.0"];

if (!semver.satisfies(process.version, SUPPORTED_NODE_VERSIONS.join(" || "))) {
  console.warn(
    chalk.yellow(
      `You are using a version of Node.js that is not supported, and it may work incorrectly, or not work at all.

Please, make sure you are using a supported version of Node.js.

To learn more about which versions of Node.js are supported go to https://hardhat.org/nodejs-versions`
    )
  );
}

require("./cli");
