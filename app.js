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
    // const userNameEmail = users.map((user) => {
    //   // return {
    //   //   name: student.name,
    //   //   eligibleSchool: findSchool.map((schoolName) => {
    //   //     return schoolName.name;
    //   //   }),
    //   // };
    //   return {
    //     name: user.name,
    //     email: user.email,
    //   };
    // });
    // console.log(userNameEmail);
    ///////////////////// Bodlogo 4 //////////////////
    // const geoInfo = users.sort((a, b) => b.address.geo.lat - a.address.geo.lat);
    // console.log(geoInfo.map((user) => user.address.geo));
    ///////////////////// Bodlogo 5 //////////////////
    //     let animals = ['elephant', 'cat', 'bear', 'dog', 'cow']
    // let newWord = animals.reduce((accumulator, value) => {
    //     return accumulator + value[0]
    // }, '')
    // console.log(newWord) // ecbdc
    // let res = 1;
    // const city = users.map((resident) => resident.address.city);
    // // console.log(city);
    // const cityResident = city.reduce((acc, value) => {
    //   // if (acc === value) {
    //   //   res++;
    //   //   return {
    //   //     city,
    //   //     res,
    //   //   };
    //   // } else {
    //   //   return {
    //   //     acc: res,
    //   //   };
    //   // }
    // });
    // console.log(cityResident);
    ///////////////////// Bodlogo 6 //////////////////
    // const companyUpperName = users.map((user) => {
    //   return user.company.name.toUpperCase();
    // });
    // console.log(companyUpperName);
    ///////////////////// Bodlogo 7 //////////////////
    // const webs = users.map((web) => {
    //   return web.website;
    // });
    // const orgExtension = webs.filter((arg) => {
    //   if (arg.includes(".org")) {
    //     return true;
    //   }
    // });
    // console.log(orgExtension);
    ///////////////////// Bodlogo 8 //////////////////
    //   const lat = users.map((userLat) => {
    //     return userLat.address.geo.lat;
    //   });
    //   let length = lat.length;
    //   console.log(length);
    //   const avgLat = lat.reduce((pValue, cValue) => {
    //     return (pValue = pValue + parseFloat(cValue));
    //   }, 0);
    //   console.log(avgLat / users.length);
    ///////////////////// Bodlogo 9 //////////////////

    const result = users.filter((el) =>
      el.company.catchPhrase.includes("interface")
    );

    const names = result.map((worker) => worker.name);

    console.log(names);
  });
