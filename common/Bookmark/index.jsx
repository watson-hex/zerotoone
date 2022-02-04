import React from "react";
import Image from "next/image";
import Boldbookmark from "../../public/assets/svg/Boldbookmark.svg";
import Bookmark from "../../public/assets/svg/bookmark.svg";

export default function BookmarkButton(props) {
  const [internalbookmarked, setinternalBookmarked] = React.useState(
    props.Bookmarked
  );
  // handle state of button click

  // handler function to change state of button click
  const handleClick = () => {
    //set value of internalbookmarked to opposite of previous state
    setinternalBookmarked((prevState) => !prevState);

    // api calls to update database for bookmark axios
  };

  console.log(internalbookmarked);

  return (
    <div>
      {" "}
      <div className="grid justify-items-end ">
        <button
          className=""
          onClick={() => {
            handleClick();
          }}
        >
          <Image
            src={internalbookmarked ? Boldbookmark : Bookmark}
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
}