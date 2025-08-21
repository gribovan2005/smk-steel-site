import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const url = searchParams.get("url");
        const name = searchParams.get("name") || "file";
        if (!url) {
            return NextResponse.json({ ok: false, error: "Missing url" }, { status: 400 });
        }

        const upstream = await fetch(url, { redirect: "follow" });
        if (!upstream.ok || !upstream.body) {
            const text = await upstream.text().catch(() => "");
            return NextResponse.json(
                { ok: false, error: `Upstream ${upstream.status}`, body: text.slice(0, 500) },
                { status: 502 }
            );
        }

        const contentType = upstream.headers.get("content-type") || "application/octet-stream";
        const disposition = `attachment; filename*=UTF-8''${encodeURIComponent(name)}`;

        return new Response(upstream.body, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Content-Disposition": disposition,
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (e: unknown) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
