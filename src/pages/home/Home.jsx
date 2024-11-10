import AddMusic from "../../components/AddMusic";
import Card from "../../components/Card";

const Home = () => {
  return <div className="w-screen h-screen flex flex-col ">

    <div className="flex-1">
      <AddMusic />
    </div>
    <div className="flex-1">
      <Card />
    </div>


  </div>;
};

export default Home;
