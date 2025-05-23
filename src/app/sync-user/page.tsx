import { db } from '@/server/db'
import { auth, clerkClient, EmailAddress } from '@clerk/nextjs/server'
import { create } from 'domain'
import { notFound, redirect } from 'next/navigation'


const SyncUser = async () => {
   const { userId } = await auth()
   if(!userId) {
        throw new Error('No user found')
   }
   const client = await clerkClient()
   const user = await client.users.getUser(userId)
   if(!user.emailAddresses[0]?.emailAddress) {
        return notFound()
   }

await db.user.upsert({
    where: {
        emailAddress: user.emailAddresses[0]?.emailAddress ?? ""
    },
    update: {
    imageUrl: user.imageUrl,
    firstName: user.firstName,
    lastName: user.lastName,
    },
    create: {
        id: userId,
        emailAddress: user.emailAddresses[0]?.emailAddress ?? "",
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
    }
})
return redirect('/dashboard')

}

export default SyncUser