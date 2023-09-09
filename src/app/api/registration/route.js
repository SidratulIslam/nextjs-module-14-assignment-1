import { NextResponse } from 'next/server'
import {sendMail} from "@/app/utility/SendMail";
export async function POST(req,res) {
    const JsonBody = await req.json()
    let email=JsonBody['email'];
    let password=JsonBody['password'];
    try {
        await sendMail('Verification', email, 'This is a verification email');
        return NextResponse.json(
            {status:true,message:"Verification mail sent to your email"},
            { status: 200, headers: { 'Set-Cookie': [`email=${email}; Path=/`, `password=${password}; Path=/`]}}
        )
    } catch (e) {
        return NextResponse.json({status:false,message:"Request Fail"})
    }
}
