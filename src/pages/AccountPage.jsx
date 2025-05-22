import { useParams } from "react-router"
import PageTitle from "../components/PageTitle"
import UserCard from "../components/UserCard"
import { useEffect, useState } from "react"
import { fetchUserByUsername } from "../utils/api"
import UseLoadingHook from "../hooks/UseLoadingHook"

const AccountPage = ()=>{
    const {usernameParam} = useParams()
    const { data:userInfo, isLoading, error } = UseLoadingHook(fetchUserByUsername, usernameParam)


    useEffect(()=>{},[])

    return <>{error?<PageTitle title={"Account Page Not Found"} />:
    <>{isLoading?<h2>Loading...</h2>:
    <div className="listItem">
    <PageTitle title={`${usernameParam}'s Account`} />
    <UserCard user={userInfo} />
    </div>}
    </>}
    </>
}

export default AccountPage