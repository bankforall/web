import React from "react";
import { PeerShareRoom } from "@/model/peerShareRoom";
import BaseLayout from "@/components/BaseLayout";

const PeerSharingDashboard = () => {
  let peerShareRoomList: PeerShareRoom[] = [];
  let microFinanceAmount = 10000;
  let peerSharingAmount = 10000;
  let activeTab = 0;
  let peerShareAmount = 0;
  let currentDeptEquity = 2;
  let creditScore = "SSS+";

  peerShareRoomList.push({
    roomName: "firstRoom",
    peerShareType: "fixed",
    payment: 1234,
    maxMember: 10,
    minimumCredit: "A",
    joinable: true,
    roomType: "public",
  } as PeerShareRoom);
  peerShareRoomList.push({
    roomName: "secondRoom",
    peerShareType: "fixed",
    payment: 1234,
    maxMember: 10,
    minimumCredit: "A",
    roomType: "private",
  } as PeerShareRoom);
  peerShareRoomList.push({
    roomName: "thirdRoom",
    peerShareType: "fixed",
    payment: 1234,
    maxMember: 10,
    minimumCredit: "A",
    roomType: "public",
  } as PeerShareRoom);
  peerShareRoomList.push({
    roomName: "forthRoom",
    peerShareType: "fixed",
    payment: 1234,
    maxMember: 10,
    minimumCredit: "A",
    roomType: "public",
  } as PeerShareRoom);

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
          {peerShareRoomList.map((room) => (
            <li
              key={room.roomName}
              className="flex justify-between items-center rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h3 className="text-sm font-medium">
                  Room Name: {room.roomName}
                </h3>
                <h6 className="text-sm font-medium">
                  Members: {0 + ""} / {room.maxMember + ""}
                </h6>
                <h6 className="text-sm font-medium">
                  Credit: {room.minimumCredit}
                </h6>
                <p className="text-sm font-medium">
                  Type: {room.peerShareType}
                </p>
                <div className="relative h-24">
                  <p className="absolute z-20 bottom-0 flex items-center h-7 w-48 text-sm rounded-full bg-lightpurple pl-4 text-white font-bold">
                    Pool: Bath {room.payment + ""}
                  </p>
                  <p className="absolute z-10 bottom-0 h-[27px] w-72 flex justify-end items-center text-sm rounded-full border-dashed border-[1px] bg-gray-200 text-gray-400 font-bol pr-2">
                    Bath: {room.payment + ""}
                  </p>
                </div>
              </div>
              {room.roomType === "public" ? (
                <button
                  className="rounded-md px-4 py-2 text-white"
                  style={{
                    backgroundColor: room.joinable ? "mediumpurple" : "gray",
                  }}
                >
                  JOIN
                </button>
              ) : (
                <button
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
    </BaseLayout>
  );
};
export default PeerSharingDashboard;
