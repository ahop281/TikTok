import User from "../Components/User"
import { videos } from '../data'

export default function Following() {
    return (
        <div className="absolute right-0 z-1 py-6 w-[740px]">
            <div className="flex flex-row flex-wrap pt-4">
                {
                    videos.map(user => (
                        <User key={user.id} {...user} />
                    ))
                }
            </div>
        </div>
    )
}
