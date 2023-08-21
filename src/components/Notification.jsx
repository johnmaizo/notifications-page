import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const Notification = ({
  name,
  notification,
  bold,
  time,
  src,
  message,
  src2,
  number,
  decreaseNotifsCount,
  markAllRead,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (markAllRead) {
      setIsClicked(true);
    }
  }, [markAllRead]);

  const handleClick = () => {
    if (number <= 3 && !isClicked) {
      decreaseNotifsCount();
      setIsClicked(true);
    }
  };

  return (
    <button
      className={` p-6 ${
        !isClicked && number <= 3 ? "bg-[#F6FAFD]" : ""
      } rounded-md block`}
      onClick={handleClick}
    >
      <div className=" flex gap-2">
        <div>
          <img
            src={`../src/assets/images/${src}`}
            alt={name}
            className="aspect-square max-w-[2.5em]"
          />
        </div>
        <div className=" text-left leading-snug">
          <p className=" text-[#707378] relative">
            <strong className=" text-black hover:text-[#0a317b]">{name}</strong>{" "}
            {notification}{" "}
            {bold && (
              <strong
                className={` ${
                  !isClicked && number <= 3
                    ? "text-[#0a317b]"
                    : "text-[#5e6778]"
                }`}
              >
                {bold}
              </strong>
            )}{" "}
            {!isClicked && number <= 3 && (
              <span
                className="circle_red inline-flex mb-[0.1em] ml-1"
                aria-hidden
              ></span>
            )}
          </p>
          <span className=" flex text-[#9699A0]">{time}</span>

          {message && (
            <div className=" bg-[#FEFFFF] p-6 rounded-lg mt-5 border-solid border-[#E3E7E6] border hover:bg-[#E5EFF9] text-[#76797E] font-medium">
              <p>{message}</p>
            </div>
          )}
        </div>
        {src2 && (
          <div className=" ml-auto">
            <img
              src={`../src/assets/images/${src2}`}
              alt="Chess"
              className=" aspect-square max-w-[3.1em] border-4 border-transparent hover:border-[#E6F1F3] rounded-lg"
            />
          </div>
        )}
      </div>
    </button>
  );
};

Notification.propTypes = {
  name: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired,
  bold: PropTypes.string,
  time: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  message: PropTypes.string,
  src2: PropTypes.string,
  number: PropTypes.number,
  decreaseNotifsCount: PropTypes.func.isRequired,
  markAllRead: PropTypes.bool.isRequired,
};

export default Notification;
