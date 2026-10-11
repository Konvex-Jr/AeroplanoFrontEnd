import { Resend } from "resend";

let client: Resend | null = null;

export function getResend() {
  
    if (!client) {
    
        const key = process.env.RESEND_API_KEY;
    
        if (!key) throw new Error("RESEND_API_KEY is not set");
    
        client = new Resend(key);
    }

    return client;
}