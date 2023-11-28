import { NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';
export default async function getCookies(req) {
  const cookieData = cookies(req);
  return cookieData;
}

export async function GET(req) {
  const cookieData = await getCookies(req);
  const token = cookieData.get('token').value;
  console.log(token);
  console.log(`Bearer ${token}`);
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.status);
      return NextResponse.json({
        status: response.data.status,
        data: response.data.data,
      });
  } catch (error) {
    return NextResponse.json({
      status: error.response.data.status,
      data: error.response.data,
    });
  }

}
