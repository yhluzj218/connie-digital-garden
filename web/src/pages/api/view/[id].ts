import type { APIRoute } from "astro"
import { incrementView, getView } from "../../../services/viewService"

export const GET: APIRoute = async ({ params }) => {
  const id = params.id
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const count = await getView(id)
  return new Response(JSON.stringify({ id, count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}

export const POST: APIRoute = async ({ params }) => {
  const id = params.id
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  await incrementView(id)

  // 回傳最新值（方便前端直接更新）
  const count = await getView(id)
  return new Response(JSON.stringify({ id, count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
