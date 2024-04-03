import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  return <div>VideoPage {id}</div>;
};

export default VideoPage;
