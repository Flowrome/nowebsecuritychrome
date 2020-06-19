#!/usr/bin/env node
const prompts = require("prompts")
const { shell } = require("./helpers/shell")
const chalk = require("chalk")
const commands = {
  "chrome:67": `open -na Google\\ Chrome --args --user-data-dir= --disable-web-security --disable-site-isolation-trials`,
  "chrome:83": `open -na Google\\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials`,
}

const message = `${chalk.white.bgRedBright.bold(
  "Please pay attention, disabling web security of your browser may expose you to web attacks (malware, hacks), this library is for developers that KNOW how to manage the security risks"
)}`

commands.latest =
  commands[Object.keys(commands)[Object.keys(commands).length - 1]]

const start = async () => {
  console.log(message)
  const version = process.argv.slice(2)[0]
  let questions = null
  if (!version) {
    questions = {
      type: "select",
      name: "value",
      message: "choose version of chrome to run with disabled security",
      initial: 0,
      choices: [
        ...Object.keys(commands).map((key) => ({
          title: key,
          value: commands[key],
        })),
      ],
    }
  }
  const { value } = version ? { value: version } : await prompts(questions)
  console.log(value)
  try {
    await shell(`${value}`)
  } catch (e) {
    console.log(e)
  }
}

start()
