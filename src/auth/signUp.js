export async function signUpApi(userData) {
    return await fetch("https://eazy-mart-users-data.onrender.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

}
