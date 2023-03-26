import {PeerShareRoom} from "@/model/peershare-room";

export async function getAllRoom(): Promise<PeerShareRoom[]> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch('http://10.2.150.92:5000/peershare-room', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
        },
    })
        .then(response => {
            console.log('header', response.headers);
            if(response.status === 200) {
                return response.json()
            } else {
                return false;
            }

        }).then(response => {
            console.log('res', response)
            if (response?.length > 0) {
                return response;
            }
            alert('no rooms available');
            return [] as PeerShareRoom[];
        }).catch(error => {
            console.error('Error:', error);
            alert('shit');
            return [] as PeerShareRoom[];
        });
}

export async function joinRoom(inviteCode: string, password: string): Promise<boolean> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch(`http://10.2.150.92:5000/peershare-room/join/${inviteCode}`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
        },
        body: JSON.stringify({roomPassword: password})
    })
        .then(response => {
            console.log('header', response.headers);
            // if(response.status === 200) {
            //     console.log('resCV', response);
            //     return response.json()
            // } else {
            //     return response.json();
            // }
            return response.json();

        }).then(response => {
            console.log('res', response)
            return response.status;

        }).catch(error => {
            console.error('Error:', error);
            alert('shit');
            return false;
        });
}
