// const jsonfile = require("jsonfile");
import jsonfile from "jsonfile";
import moment from "moment";
import random from "random";
// const moment = require("moment");
// const random = require("random");
import simpleGit from "simple-git";
// const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";

// Main function handle actions
const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(3, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date: DATE };
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n))
      .push();
  });
};

makeCommit(500);
