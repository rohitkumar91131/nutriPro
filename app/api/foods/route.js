import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";


export async function GET(request) {

    const session = await getServerSession(authOptions);

    console.log("Session in foods route:", session);

    if(!session){
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    
    return new Response(JSON.stringify({ message: "Authorized access to foods route" }), { status: 200 });  

}    