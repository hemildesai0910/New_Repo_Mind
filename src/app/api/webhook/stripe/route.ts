
import { db } from '@/server/db'
import {headers} from 'next/headers'
import {NextRequest, NextResponse} from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia'
})


export async function POST(request: Request){
    // console.log(request);
    const signature = request.headers.get('Stripe-Signature')
    // console.log(signature);
    const body = await request.json();
    // console.log(body)
    // const signature = (await headers()).get('Stripe-Signature') as string
    // console.log(signature)
    // let event: Stripe.Event

    // try {
    //     event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
    // } catch (error) {
    //     return NextResponse.json({error: 'Invaild signature'}, {status: 400})
    // }

    // const session = event.data.object as Stripe.Checkout.Session

    

   
        // Handle checkout session completed
        const credits = body.credits || 10;

        console.log(credits);
        const userId = body.userId;
        if(!userId || !credits){
            return NextResponse.json({error: 'No user ID or credits'}, {status: 400})
        }

        const amountPaid = body.amount_total ? body.amount_total / 100 : (credits / 50)

        await db.stripeTransaction.create({data: {userId, credits}})
        await db.user.update({
            where: {id: userId}, data: {
                credits: {
                    increment: Number(credits)
                }
            }
        })
        return NextResponse.json({message: 'Credits added sucessfully'}, {status: 200})
    
    // return NextResponse.json({message: 'Hello world'})
}

