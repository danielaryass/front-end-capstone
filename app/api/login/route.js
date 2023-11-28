import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
  const dataReq = await req.json();
  const { email, password } = dataReq;
  const response = await axios
    .post('http://127.0.0.1:8000/api/login', {
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response
    });
    console.log(response.data.token)
    const cookies = response.headers['set-cookie']; // Menerima cookie dari server
    return NextResponse.json(
      {
        status: response.status,
        data: response.data,
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': cookies, // Mengirim cookie ke peramban
        },
      }
    );
}
