interface Dragon {
    name: string;
    description: string;
    id: string;
    // Add more properties as needed
}

export async function getAllDragons(): Promise<Dragon[]> {
    const res = await fetch("https://api.spacexdata.com/v4/dragons");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
