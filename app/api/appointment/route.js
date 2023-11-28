import { NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';
import { parseISO, format } from 'date-fns';

export default async function getCookies(req) {
  const cookieData = cookies(req);
  return cookieData;
}

export async function POST(req) {
  const dataReq = await req.json();
  const cookies = await getCookies(req);
  const token = cookies.get('token').value;

  console.log(dataReq)
  try{
  const response = await axios
    .post('http://127.0.0.1:8000/api/appointment/store', dataReq, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
  return NextResponse.json(
    {
      status: response.status,
      data: response.data,
    },
    {
      status: 200,
    }
  );
  }catch(error){
    return NextResponse.json(
      {
        status: error.response.status,
      },

    );
  }
}
