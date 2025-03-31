const userList = document.getElementById("user-list");

const user = {
  image: "https://randomuser.me/api/portraits/men/69.jpg",
  fullname: "Bold Bat",
  email: "test@gmail.com",
  phone: "99992222",
  website: "https://randomuser.me/",
};

const createUser = (user) => {
  const { image, fullname, email, phone, website } = user;
  return `
    <div class="user">
        <img
        src="https://randomuser.me/api/portraits/men/69.jpg"
        height="50px"
        width="50px"
        alt="man"
        />
        <p>${Fullname}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${website}</p>
        </div>
    `;
};

// const users = [user, user, user, user, user];

const addUsers = () => {
  console.log("hi");
  let usersHtml = "";

  users.forEach((user) => {
    const userHtml = createUser(user);
    usersHtml += userHtml;
  });

  userList.innerHTML = usersHtml;
};
