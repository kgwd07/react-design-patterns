import axios from "axios";
import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
import { CurrentUserLoader } from "./components/Current-user-loader";
import { UserLoader } from "./components/user-loader";
import { ResouceLoader } from "./components/resource-loader";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return Promise.resolve(localStorage.getItem(key)); // AS WE ARE USING AWAIT INSIDE THE DataSource COMPONENT
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
          <UserInfo/>
      </CurrentUserLoader> */}

      {/* <UserLoader userId={"3"}>
          <UserInfo/>
      </UserLoader> */}

      {/* <ResouceLoader resouceUrl={"/users/2"} resourceName={"user"}>
      <UserInfo/>
      </ResouceLoader> */}

      {/* <ResouceLoader resouceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo/>
      </ResouceLoader> */}


      {/* <DataSource getData={() => fetchData("/users/1")} resourceName={"user"}>
        <UserInfo />
      </DataSource>

      <DataSourceWithRender getData={() => fetchData("/users/1")} resourceName={"user"} render={(resource) => <UserInfo user={resource}/>}>
      </DataSourceWithRender>

      <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
        <Message />
      </DataSource> */}

    </>
  );
}

export default App;
