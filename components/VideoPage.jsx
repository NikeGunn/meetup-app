import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from "../src/env";

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = APP_ID;
    const serverSecret = SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Type your meeting username..."
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement Group call modify the parameter here to [ZegoUIKitPrebuilt.GroupCall].
      },
    });
  };

  return <div ref={myMeeting}></div>;
};

export default VideoPage;
