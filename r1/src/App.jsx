import Avatar from "./Components/Avatar";
import Counter from "./Components/Counter";
import Greetings from "./Components/Greetings";
import MyButton from "./Components/MyButton";
import Userauth from "./Components/Userauth";
import "./App.css";

//number listing
const num = [1, 2, 3, 4, 5];
const numberListing = num.map((el) => <li key={Math.random()}>{el ** 2}</li>);

//user listing
const users = [
  {
    name: "sanjay baro",
    src: "https://avatars.githubusercontent.com/u/123923491?v=4",
    rounded: true,
  },
  {
    name: "shelu kumar",
    src: "https://avatars.githubusercontent.com/u/93376045?v=4",
    rounded: false,
  },
  {
    name: "lohan kumar",
    src: "https://avatars.githubusercontent.com/u/71995793?v=4",
    rounded: true,
  },
];
const userAvatar = users.map((user) => (
  <Avatar
    src={user.src}
    name={user.name}
    rounded={user.rounded}
    key={Math.random()}
  />
));

function App() {
  let isAuth = false;
  return (
    <>
      {numberListing}
      {userAvatar}
      <h2>{isAuth ? "user is authenticated" : "user not authenticated"}</h2>
      <MyButton text="click me! here" bgcolor="violet" />
      {/* <Counter />
      <Greetings /> */}
      {/* <Userauth /> */}
    </>
  );
}

export default App;
