import React from "react";
import { PeerShareRoom } from "@/model/peerShareRoom";
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
    <div>
      <div className="bg-lightpurple rounded-bl-3xl rounded-br-3xl py-4 px-8">
        <div>
          <h1 className="text-white font-medium my-2 text-center">
            Peer Share
          </h1>
          <h3 className="text-white font-medium text-center">
            {peerShareAmount}
          </h3>
          <div
            className="break-line text-black w-full bg-white my-2"
            style={{ height: 3 }}
          ></div>
          <h5 className="text-white font-medium text-center">
            Current D/E = {currentDeptEquity}
          </h5>
          <h5 className="text-white font-medium text-center">
            Credit Score = {creditScore}
          </h5>
        </div>
      </div>
      {/*//create a modal that loops peerShareRoomList and displays all value in the object*/}
      <div className="modal fade" id="peerShareRoomModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="justify-center flex">
              <button
                type="button"
                className="mt-2 w-80 modal-header border-8 border-lightpurple bg-lightpurple text-white rounded-3xl mx-5 text-center"
                // className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Create Room
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                {peerShareRoomList.map((room) => (
                  <div
                    key={room.roomName}
                    className="flex flex-row border-4 rounded-3xl border-gray-500 p-4 mx-5 mt-2 mb-4"
                  >
                    <div className="w-3/4">
                      <h3>Room Name: {room.roomName}</h3>
                      <h6>Capacity: {room.maxMember + ""}</h6>
                      <p>Type: {room.peerShareType}</p>
                      <p>Payment per round: {room.payment + ""}</p>
                    </div>
                    <div className="justify-center flex align-middle w-1/4">
                      {room.roomType === "public" ? (
                        <button
                          style={{
                            backgroundColor: room.joinable
                              ? "mediumpurple"
                              : "gray",
                          }}
                          className="mt-2 w-80 h-3/4 modal-header border-8  text-white rounded-3xl mx-5 text-center"
                        >
                          JOIN
                        </button>
                      ) : (
                        <button
                          style={{
                            backgroundColor: room.joinable
                              ? "mediumpurple"
                              : "gray",
                          }}
                          className="mt-2 w-80 h-3/4 modal-header border-8  text-white rounded-3xl mx-5 text-center"
                        >
                          LOCKED
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button to trigger the modal */}
      {/*<button*/}
      {/*    type="button"*/}
      {/*    className="btn btn-primary"*/}
      {/*    data-bs-toggle="modal"*/}
      {/*    data-bs-target="#peerShareRoomModal"*/}
      {/*>*/}
      {/*    View Peer Share Rooms*/}
      {/*</button>*/}
    </div>
  );
};
export default PeerSharingDashboard;
