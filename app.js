// async

// const myPromise = new Promise((resolve, reject) => {
//   // resolve("ok");
//   // reject("ok");

// //   setTimeout(() => {
// //     reject("aldaa garlaa");
// //   }, 3000);
// // });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const userPromise = fetch("https://jsonplaceholder.typicode.com/users");

userPromise
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    // console.log(users);
    ////////////////////// Bodlogo 1 //////////////////

    // const userNames = users.map((user) => {
    //   return user.name;
    // });
    // console.log(userNames);

    ///////////////////// Bodlogo 2 //////////////////

    // const city = users.filter((user) => {
    //   //console.log(user);
    //   if (user.address.city.includes("view")) {
    //     // return user.address.city   // ymar 1 utga butsaj bgaa ni truthy-r true uchir true utga return/butsaahtai adil bolno
    //     return true;
    //   }
    // });
    // console.log(city);

    ///////////////////// Bodlogo 3 //////////////////

    const userNameEmail = users.map((user) => {
      // return {
      //   name: student.name,
      //   eligibleSchool: findSchool.map((schoolName) => {
      //     return schoolName.name;
      //   }),
      // };
      return {
        name: user.name,
        email: user.email,
      };
    });
    console.log(userNameEmail);

    ///////////////////// Bodlogo 4 //////////////////

    const geoInfo = users.sort;
  });
