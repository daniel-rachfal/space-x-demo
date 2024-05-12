const BASE_URL = "https://api.spacexdata.com";

export interface Dragon {
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

export interface Launch {
    id: string;
    name: string | null;
    date_utc: string | null;
    details: string | null;
    rocket: {
        name: string | null;
        cost_per_launch: number | null;
    };
    // Add more properties as needed
}

export async function getRecentLaunches(): Promise<Launch[]> {
    const body = JSON.stringify({
        query: {},
        options: {
            sort: {
                date_unix: 'desc'
            },
            populate: [
                {
                    path: 'rocket',
                    select: ['name', 'cost_per_launch'],
                }
            ]
        }
    });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    }

    const res = await fetch(`${BASE_URL}/v5/launches/query`, options);

    if (!res.ok) {
        throw new Error("Failed to fetch launches");
    }

    const json = await res.json();

    return json.docs;
}