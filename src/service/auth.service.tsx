import {LoginSchema} from "@/libs/validations/login";
import {RegisterSchema} from "@/libs/validations/register";
import {RegisterRequest} from "@/model/register";

export async function login(data: LoginSchema): Promise<boolean> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch('http://10.2.150.92:5000/auth/signin', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
                sessionStorage.setItem('userToken', response.access_token);
                return true;
            }
            alert('user/password incorrect');
            return false;
        }).catch(error => {
            console.error('Error:', error);
            return false;
        });
}

export async function signUp(data: RegisterSchema): Promise<boolean> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    console.log('data', JSON.stringify(data));
    return await fetch('http://10.2.150.92:5000/auth/signup', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber
        } as RegisterRequest)
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
                sessionStorage.setItem('userToken', response.access_token);
                return true;
            }
            alert('unknown error');
            return false;
        }).catch(error => {
            console.error('Error:', error);
            return false;
        });
}
