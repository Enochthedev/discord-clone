import { redirect } from "next/navigation"
import { dataBase } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";




const SetupPage =  async () => {
    const profile = await initialProfile();

    const server = await dataBase.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if (server) {
        return redirect(`/servers/${server.id}`);
    }

    return ( 
        <div>
            Create a Server
        </div>
    );
}

export default SetupPage;