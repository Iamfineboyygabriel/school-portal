import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Portal() {
  return (
    <main className="flex h-screen w-full items-start justify-between bg-slate-200">
      <Sidebar />
      <Main />
    </main>
  );
}
