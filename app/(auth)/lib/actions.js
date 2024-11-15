'use server'

import { redirect } from "next/navigation"

export async function testRedirect() {
    redirect('/dashboard')
}