export interface PeerShareRoom {
    id: string,
    _id: string,
    inviteCode?: string,
    roomName: string,
    maxMember: Number,
    payment: Number,
    creditRequirement: string,
    typeRoom: 'fixed' | 'float',
    paymentTerm: string,
    paymentTermUnit: string,
    joinable?: boolean,
    roomType: 'public' | 'private',
    members: Member[],
    roomPassword: string
}

export interface Member {
    user: string,
    role: string,
    isBidden: boolean,
    isPaid: boolean,
    isWinner: boolean,
    bidRate: number,
    fullName: string,
    credit: string,
    avatar: string,
    phoneNumber: string,
    interest: number,
    _id: string

}
