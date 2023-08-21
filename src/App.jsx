import Footer from "./Footer";

import notifications from "./data/notifications.json";

import Notification from "./components/Notification.jsx";
import {useState} from "react";

const App = () => {
  const [notifsCount, setNotifsCount] = useState(3);
  const [markAllRead, setMarkAllRead] = useState(false);

  const decreaseNotifsCount = () => {
    notifsCount > 0 && setNotifsCount(notifsCount - 1);
  };

  const markAllAsRead = () => {
    setNotifsCount(0);
    setMarkAllRead(true);
  };

  return (
    <>
      <main className=" min-h-screen bg-[#F9FAFE] md:grid md:place-content-center">
        <div className=" bg-white my-14 md:px-7 md:rounded-[1.5em] max-w-[48em]">
          <div className=" px-5 flex justify-between items-end mt-10 flex-wrap gap-y-3">
            <div className="flex gap-3 items-end text-2xl">
              <h1 className=" font-extrabold">Notifications</h1>
              <span className=" bg-[#0A327A] py-[0.006em] px-[0.6em] rounded-lg font-extrabold text-white text-xl">
                {notifsCount}
              </span>
            </div>
            <button
              onClick={markAllAsRead}
              className=" text-[#5e6778] hover:text-[#1B2B44] font-medium"
            >
              Mark all as read
            </button>
          </div>
          <div className=" flex flex-col gap-5 py-5 px-5">
            {notifications.map((notify, id) => (
              <Notification
                key={id}
                {...notify}
                number={id + 1}
                decreaseNotifsCount={decreaseNotifsCount}
                markAllRead={markAllRead}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
