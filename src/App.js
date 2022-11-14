import { useEffect, useState } from "react";
import Wusha from "./Wusha";
import Header from "./components/Header";
import Robot from "./components/Robot";
import Footer from "./components/Footer";
import TensorFlow from "./components/TensorFlow";
import Wallpaper from "./components/Wallpaper";
import AIPhoto from "./components/AIPhoto";
import Horoscope from "./components/Horoscope";

function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
    });

    return () => {
      window.removeEventListener("hashchange");
    };
  }, []);

  return hash === "#wusha" ? (
    <Wusha />
  ) : (
    <div className="flex flex-col font-mono dark:bg-gray-800">
      <Header />
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <Horoscope />
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <TensorFlow />
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <Robot />
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <Wallpaper />
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <AIPhoto />
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <Footer />
    </div>
  );
}

export default App;
