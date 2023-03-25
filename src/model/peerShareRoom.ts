export interface PeerShareRoom {
    roomName: string,
    maxMember: Number,
    payment: Number,
    minimumCredit: string,
    peerShareType: 'fixed' | 'float',
    joinable?: boolean,
    roomType: 'public' | 'private'
}
