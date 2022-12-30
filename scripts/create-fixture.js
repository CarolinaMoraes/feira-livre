/**
 * Script to create a new fixture file based on the exported final value 
 * from a given generator file.
 */

const fs = require("fs");
const env = process.env;

const generatorName = env.npm_config_generatorName;
const outputFilename = env.npm_config_outputFilename || generatorName;
const GENERATORS_FOLDER = "./generators";
const FIXTURES_FOLDER = "./src/models/builders/fixtures";

function createFixture() {
  // importing the value that is going to become a fixture from the generator file
  const generatorValue = require(`${GENERATORS_FOLDER}/${generatorName}.js`);

  console.log(`Creating fixture of: ${generatorName}.js`)

  const jsonValue = JSON.stringify(generatorValue, null, "  ");

  console.log(`Saving to: ${FIXTURES_FOLDER}/${outputFilename}.json`);

  fs.writeFileSync(`${FIXTURES_FOLDER}/${outputFilename}.json`, jsonValue);
}

createFixture();
