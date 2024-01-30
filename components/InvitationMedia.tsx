"use client"; // This is a client component 👈🏽
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const InvitationMedia = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.onended = function () {
      setShowImage(true);
    };
  }, []);

  return (
    <div>
      {!showImage ? (
        <video
          ref={videoRef}
          className="xl:h-[30rem] rounded-xl shadow-2xl"
          // src="/invitation_short_video.mp4#t=0.001
          src="/invitation_short_video.mp4"
          poster="/poster_video.jpeg"
          typeof="mp4"
          controls
          playsInline
        ></video>
      ) : (
        <Image
          className="rounded-xl shadow-2xl"
          src="/invitation_sharon.jpeg"
          alt={"invitation image"}
          width="400"
          height="800"
        />
      )}
    </div>
  );
};

export default InvitationMedia;
