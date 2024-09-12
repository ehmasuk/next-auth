export const getData = async () => {
    const res = await fetch(process.env.DOMAIN + "/api/users");
    return await res.json();
};

async function Home() {
    const data = process.env.DOMAIN && await getData()

    return <div>
        <ul className="space-y-2 p-10">
            <p className="font-semibold">All names</p>
            {
                data?.map((e,i)=>{
                    return <li key={i}>{e.name}</li>
                })
            }
        </ul>
    </div>;
}

export default Home;
