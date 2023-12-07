import { getFirst } from "@/lib/productos/data.js"

export async function GET(request , {params}) {
    const producto = await getFirst(params.id);
    return Response.json(producto);
}