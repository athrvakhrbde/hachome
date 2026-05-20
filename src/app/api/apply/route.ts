import { NextRequest, NextResponse } from "next/server";

const MAX_LEN = {
  name: 120,
  email: 254,
  social: 500,
  shipped: 4000,
  why: 4000,
};

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = trim(body.name);
    const email = trim(body.email);
    const social = trim(body.social);
    const shipped = trim(body.shipped);
    const why = trim(body.why);

    if (!name || name.length > MAX_LEN.name) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!email || !isValidEmail(email) || email.length > MAX_LEN.email) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!social || social.length > MAX_LEN.social) {
      return NextResponse.json({ error: "Invalid social link" }, { status: 400 });
    }
    if (!shipped || shipped.length > MAX_LEN.shipped) {
      return NextResponse.json({ error: "Invalid shipped field" }, { status: 400 });
    }
    if (!why || why.length > MAX_LEN.why) {
      return NextResponse.json({ error: "Invalid why field" }, { status: 400 });
    }

    const application = { name, email, social, shipped, why, submittedAt: new Date().toISOString() };

    if (process.env.NODE_ENV === "development") {
      console.log("[HackHome Apply]", JSON.stringify(application, null, 2));
    } else {
      console.log("[HackHome Apply]", email, name);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
