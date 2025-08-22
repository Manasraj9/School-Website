import { account } from "@/lib/appwrite";

export async function GET() {
  try {
    const session = await account.get();
    return Response.json(session);
  } catch (error) {
    return Response.json({ message: "Appwrite setup working!" });
  }
}
