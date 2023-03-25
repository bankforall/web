export async function deposit(amount: Number): Promise<boolean> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch('http://10.2.150.92:5000/transaction/deposit', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
        },
        body: JSON.stringify({amount})
    })
        .then(response => {
            console.log('header', response.headers);
            if(response.status === 200) {
                return response.json()
            } else {
                return {};
            }

        }).then(response => {
            console.log('res', response)
            if (response) {
                // sessionStorage.setItem('userToken', response.access_token);
                console.log('resRes', response);
                return true;
            }
            console.error('error getting user summary')
            return false;
        }).catch(error => {
            console.error('Error:', error);
            return false;
        });
}

export async function withdraw(amount: Number): Promise<boolean> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch('http://10.2.150.92:5000/transaction/withdraw', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
        },
        body: JSON.stringify({amount})
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
            if (response) {
                // sessionStorage.setItem('userToken', response.access_token);
                console.log('resRes', response);
                return true;
            }
            console.error('error getting user summary')
            return false;
        }).catch(error => {
            console.error('Error:', error);
            return false;
        });
}
