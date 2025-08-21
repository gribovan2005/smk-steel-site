import { NextResponse } from "next/server";
import { setupLeadsSheet } from "@/lib/googleSheets";

export async function POST() {
    try {
        await setupLeadsSheet();
        return NextResponse.json({ ok: true });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
