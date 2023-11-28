import { NextResponse } from 'next/server';
import axios from 'axios';
export async function GET(req) {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/doctors',{
      headers: {
        Authorization: `Bearer ${req.cookies.token}`,
      },
    });
    console.log(response.data);
    console.log(response)
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
