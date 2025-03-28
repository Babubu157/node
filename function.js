const fs = require("fs");

const tennisPlayer = {
  name: "Novac Djokovic",
  age: 37,
  job: "professional tennis player",
};

const tennisPlayer1 = {
  name: "Carlos Alkaraz",
  age: 22,
  job: "professional tennis player",
};

const databaseDeerBgaaYumiigAvchirdagFunction = async () => {
  const databaseesAvchirsanJSONfile = await fs.readFileSync(
    "./myDatabase.json",
    "utf-8"
  );
  console.log(databaseesAvchirsanJSONfile);
  const databaseeesAvchirsanJSONiigParseHiigedObjectBolgoh = JSON.parse(
    databaseesAvchirsanJSONfile
  );
  return databaseeesAvchirsanJSONiigParseHiigedObjectBolgoh;
};

const databaseDeereeShineDataNemeh = async () => {
  const databaseDeerBgaaYum = await databaseDeerBgaaYumiigAvchirdagFunction();

  databaseDeerBgaaYum.push(tennisPlayer1);
  const pushHiisenObjectooJSONbolgoh = JSON.stringify(databaseDeerBgaaYum);
  await fs.writeFileSync(
    "./myDatabase.json",
    pushHiisenObjectooJSONbolgoh,
    "utf-8"
  );
};

databaseDeereeShineDataNemeh();
