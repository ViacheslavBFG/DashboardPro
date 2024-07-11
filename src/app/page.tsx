import Customers from "./components/customers";
import Header from "./components/header";
import Navigation from "./components/navigation";
import TableCustom from "./components/tableCustom";
import UserData from "./components/userData";

export default function Home() {
  return (
    <div className="flex gap-28">
      <div className="flex flex-col border-2 bg-white shadow-2xl">
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
