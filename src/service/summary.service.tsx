import {MainDashboardSummary} from "@/model/summary";

export async function getSummary(): Promise<MainDashboardSummary> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch('http://10.2.150.92:5000/user/summary', {
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
                return {};
            }

        }).then(response => {
            console.log('res', response)
            if (response) {
                // sessionStorage.setItem('userToken', response.access_token);
                console.log('resRes', response);
                return response as MainDashboardSummary
            }
            console.error('error getting user summary')
            return {} as MainDashboardSummary;
        }).catch(error => {
            console.error('Error:', error);
            return {} as MainDashboardSummary
        });
}
