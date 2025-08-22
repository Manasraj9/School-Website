import { Client, Account, Databases, Storage, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);   // ✅ this was missing
export const IDMaker = ID;                    // optional helper

// Export IDs so they can be reused
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const COLLECTION_ID_NOTICES = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_NOTICES;
export const COLLECTION_ID_BIRTHDAYS = process.env.NEXT_PUBLIC_APPWRITE_BIRTHDAY_COLLECTION_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

