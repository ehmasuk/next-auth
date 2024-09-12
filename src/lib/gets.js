export const getData = async () => {
    const res = await fetch(process.env.DOMAIN + "/api/users");
    return await res.json();
};
