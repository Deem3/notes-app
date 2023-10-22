import { userInfoAtom } from "@utils/jotai"
import { useAtom } from "jotai"

const HomeContainer:React.FC = () => {
    const [userInfo,] = useAtom(userInfoAtom)
  return (
    <div className="h-screen w-screen">
    <div>{userInfo.email}</div>
    <div>{userInfo.firstName}</div>
    <div>{userInfo.lastName}</div>
    <div>{userInfo.id}</div>
    </div>
  )
}
export default HomeContainer;