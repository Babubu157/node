const fs = require("fs");
/////////////////////// Bodlogo 1 //////////////////////

// const getDatafromJSON = async () => {
//   const dataFromJSON = await fs.readFileSync("./insta.json", "utf-8");
//   //console.log(dataFromJSON);
//   const parsedData = JSON.parse(dataFromJSON);
//   //console.log(parsedData);
//   return parsedData;
// };

// const printSuggestedUsers = async () => {
//   const users = await getDatafromJSON();
//   const suggestedUsers = users.forEach((el) => {
//     if (el.suggested) console.log(el.username);
//   });
// };
// printSuggestedUsers();

///////////////////// Bodlogo 2 ////////////////////////

const getDatafromJSON = async () => {
  const dataFromJSONfile = await fs.readFileSync("./insta.json", "utf-8");
  const parsedData = JSON.parse(dataFromJSONfile);
  return parsedData;
};

const findMyID = async () => {
  let myID = "";
  const getAllUsers = await getDatafromJSON();
  getAllUsers.forEach((el) => {
    if (el.nickname === "25LP0000") {
      myID = el.nickname;
    }
  });
  return myID;
};

const findMyFollows = async () => {
  const myid1 = await findMyID();
  const getAllUsers1 = await getDatafromJSON();
  const result = getAllUsers1.filter((user) => {
    //   console.log(myID);

    if (user.followedByNickName === myid1) {
      // console.log(user);
      return user;
    }
  });
  console.log(result);
};

findMyFollows();
