import AppContextProvider from "../contexts/AppContext";
import Parent from "../components/with-context";

export default function Root() {
  return (
    <AppContextProvider>
      <div className="content">
        <Parent />
      </div>
    </AppContextProvider>
  );
}
