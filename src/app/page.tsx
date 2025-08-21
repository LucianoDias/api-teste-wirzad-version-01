import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { User } from "@/components/user";



const Home = () => {
  const nameUser = "Luciano Dias";
  return (
    <div>
      <Menu />
       <User  name={nameUser}/>
       <br/>
      <Footer/>
    </div>
  );
}

export default Home;
