export default async function loginApi(email) {
    const res = await fetch(`http://localhost:3000/users?email=${email}`);
    if (!res.ok) console.log('Account Could not be Loaded,Check Your Network Connection');

    const data = await res.json();
    return data ?? [];
}