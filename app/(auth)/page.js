'use client'

import Form from 'next/form';
import { testRedirect } from "./lib/actions";

export default function Page() {
    return (
        <Form action={testRedirect}>
            <button type='submit' style={{padding: '2rem'}}>
                Redirect
            </button>
        </Form>
    )
}