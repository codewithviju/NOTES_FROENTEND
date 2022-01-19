import Header from "./Header";
import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Notes />
      </div>
    </>
  );
};

export default Home;
