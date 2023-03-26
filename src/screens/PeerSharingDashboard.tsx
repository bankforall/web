import React, {useEffect, useState} from "react";
import {PeerShareRoom} from "@/model/peershare-room";
import BaseLayout from "@/components/BaseLayout";
import {getAllRoom, joinRoom} from "@/service/peer-sharing.service";
import {useNavigate} from "react-router-dom";
import CommonModal from "@/modals/CommonModal";

const PeerSharingDashboard = () => {
  const navigate = useNavigate();
  async function onJoinPrivateRoomClick(roomPassword: string) {
    console.log(roomPassword);
    const {inviteCode, _id} = data.currentPrivatePeerShareRoom;

    const response = await joinRoom(inviteCode ?? '', roomPassword);
    console.log('res123', response);
    console.log(data.currentPrivatePeerShareRoom);
    if (response) {
      navigate(`/peershare-room/${_id}`);
    } else {
      alert('incorrect invite code');
    }
    setData({...data, showJoinPrivateRoomModal: false});
  }
  function onJoinButtonClick(room: PeerShareRoom) {

    if (room.roomType === 'public') {
      if (room.joinable) {
        navigate(`/peershare-room/${room.id}`);
      } else {
        alert('requirement not met.');
      }
    } else {
      setData({...data, showJoinPrivateRoomModal: true, currentPrivatePeerShareRoom: room});
    }
  }

  const [data, setData] = useState({
    peerShareRoomList: [] as PeerShareRoom[],
    showJoinPrivateRoomModal: false,
    currentPrivatePeerShareRoom: {} as PeerShareRoom
  });

  let peerShareAmount = 0;
  let currentDeptEquity = 2;
  let creditScore = "SSS+";

  useEffect(() => {
    async function fetchData() {
      const response = await getAllRoom();
      console.log('peerShareDashboard', response);
      setData({ ...data, peerShareRoomList: response });
    }

    fetchData();
    console.log("fetched");
  }, []);

  return (
    <BaseLayout>
      <div className="bg-lightpurple rounded-bl-3xl rounded-br-3xl space-y-4 py-4 px-8">
        <h1 className="text-white font-medium my-8 text-center">Peer Share</h1>
        <h3 className="text-white font-medium text-3xl text-center">
          Bath {peerShareAmount}
        </h3>
        <div className="border-b-[2px]"></div>
        <div>
          <h5 className="text-white font-medium text-center">
            Current D/E = {currentDeptEquity}
          </h5>
          <h5 className="text-white font-medium text-center">
            Credit Score = {creditScore}
          </h5>
        </div>
      </div>

      <div className="flex flex-col px-8 py-4 space-y-4">
        <button
          type="button"
          className="my-4 text-lightpurple border-b border-dashed text-right pb-2"
        >
          Create Room
        </button>
        <ul className="space-y-4 grid">
          {data.peerShareRoomList.map((room) => (
            <li
              key={room.roomName}
              className="flex justify-between items-center rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h3 className="text-sm font-medium">
                  Room Name: {room.roomName}
                </h3>
                <h6 className="text-sm font-medium">
                  Members: {room.members.length} / {room.maxMember + ""}
                </h6>
                <h6 className="text-sm font-medium">
                  Credit: {room.creditRequirement}
                </h6>
                <p className="text-sm font-medium">
                  Type: {room.typeRoom}
                </p>
                <p className="text-sm font-medium">
                  Payment term: {room.paymentTerm}
                </p>
                <div className="relative h-24">
                  <p className="absolute z-20 bottom-0 flex items-center h-7 w-48 text-sm rounded-full bg-lightpurple pl-4 text-white font-bold">
                    Pool: Bath {Number(room.paymentTerm) * room.members.length}
                  </p>
                  <p className="absolute z-10 bottom-0 h-[27px] w-72 flex justify-end items-center text-sm rounded-full border-dashed border-[1px] bg-gray-200 text-gray-400 font-bol pr-2">
                    Bath: {Number(room.paymentTerm) * Number(room.maxMember)}
                  </p>
                </div>
              </div>
              {room.roomType === "public" ? (
                <button
                    onClick={() => onJoinButtonClick(room)}
                  className="rounded-md px-4 py-2 text-white"
                  style={{
                    backgroundColor: room.joinable ? "mediumpurple" : "gray",
                  }}
                >
                  JOIN
                </button>
              ) : (
                <button
                    onClick={() =>onJoinButtonClick(room)}
                  className="rounded-md  px-4 py-2 text-white"
                  style={{
                    backgroundColor: room.joinable ? "mediumpurple" : "gray",
                  }}
                >
                  LOCKED
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      { data.showJoinPrivateRoomModal &&
          <CommonModal title={`Join Private Peer Share Room: ${data.currentPrivatePeerShareRoom.roomName}`}
                       textInputPromptTitle={'to join please type in the invitation code'}
                       yesButtonName={'OK'}
                       yesButtonClickedCallback={onJoinPrivateRoomClick}
          ></CommonModal>
      }
    </BaseLayout>
  );
};
export default PeerSharingDashboard;
