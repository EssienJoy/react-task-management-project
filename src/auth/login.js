import toast from "react-hot-toast";

export default async function loginApi(email) {
    const res = await fetch(`https://eazy-mart-users-data.onrender.com/users?email=${email}`);
    if (!res.ok) toast.error('Account Could not be Loaded,Check Your Network Connection');

    const data = await res.json();
    return data ?? [];
}