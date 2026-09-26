import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({children})
{
    const token=localStorage.getItem("token");

    //if no token redirect to login page

    if(! token)
    {
        return <Navigate to="/login" replace></Navigate>
    }

    //otherwise show the page
    return children;

}