import Customers from "./components/customers";
import Header from "./components/header";
import Navigation from "./components/navigation";
import TableCustom from "./components/tableCustom";
import UserData from "./components/userData";

export default function Home() {
  return (
    <div className="flex gap-5 md:gap-28">
      <div className="md:flex md:flex-col md:border-2 md:bg-white md:shadow-2xl">
        <Header />
        <Navigation />
        <UserData />
      </div>
      <div className="">
        <Customers />
        <TableCustom />
      </div>
    </div>
  );
}
