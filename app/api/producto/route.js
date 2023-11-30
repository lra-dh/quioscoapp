import { getList } from "../../lib/productos/data.js"

export async function GET(request) {
    const productos = await getList();
    return Response.json({ productos });

}