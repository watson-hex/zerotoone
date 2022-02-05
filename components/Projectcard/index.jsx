import React from "react";
import Image from "next/image";
import Tag from "../../common/Tag";
import Detail from "../../common/Detail";
import BookmarkButton from "../../common/Bookmark";
import Boldbookmark from "../../public/assets/svg/Boldbookmark.svg";
import Bookmark from "../../public/assets/svg/bookmark.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Projectcard(props) {
  const router = useRouter();
  var href =
    router.asPath === "/myprojects/all" ? "/myprojects/" : "/projects/";
  href = href + props.ID + "_" + props.Pname.replace(/ /g, "");
  return (
    <div id={props.ID} className="drop-shadow-md overflow-hidden">
      <div className=" flex rounded-3xl bg-white md:p-2 justify-around">
        <div className="bg-white rounded-2xl w-4/6">
          <Link href={href} passHref>
            <div
              className="h-44 m-2 rounded-xl text-white relative "
              style={{ backgroundColor: "#6A98BF" }}
            >
              <div className="text-xl text-left ml-3 font-semibold absolute inset-x-0 top-2 ">
                {props.Pname}
              </div>
              <div className="absolute inset-x-0 bottom-0 m-3 ">
                <div className="flex justify-start text-sm font-light">
                  {props.PSdesc}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-2/4 m-2 md:m-0">
          <div
            className="flex flex-col text-sm justify-end "
            style={{ color: "#6A98BF" }}
          >
            <BookmarkButton Bookmarked={props.Bookmarked} />

            <span className="flex justify-center pt-2">
              <Tag text={props.Status} />
            </span>
            <span className="flex justify-center pt-1">
              <Tag text={props.Open} />
            </span>
            <span className="pt-2">
              <Detail v="m" text={props.Memberlist} />
            </span>
            <span className="pt-1">
              <Detail v="c" text={"Contact us"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
