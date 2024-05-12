const BASE_URL = "https://api.spacexdata.com";

interface Dragon {
    id: string;
    name: string | null;
    description: string | null;
    // Add more properties as needed
}

export async function getAllDragons(): Promise<Dragon[]> {
    const res = await fetch(`${BASE_URL}/v4/dragons`);

    if (!res.ok) {
        throw new Error("Failed to fetch dragons");
    }

    return res.json();
}

interface Launch {
    id: string;
    name: string | null;
    date_utc: string | null;
    details: string | null;
    // Add more properties as needed
}

export async function getAllLaunches(): Promise<Launch[]> {
    const res = await fetch(`${BASE_URL}/v5/launches`);

    if (!res.ok) {
        throw new Error("Failed to fetch launches");
    }

    return res.json();
}