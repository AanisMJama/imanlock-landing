import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend needs the Node.js runtime (not edge).
export const runtime = "nodejs";

// Where messages are delivered, and the verified sender they come from.
// Both can be overridden with env vars; the sending domain (imanfocus.app)
// must be verified in Resend for delivery to succeed.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@imanfocus.app";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "ImanFocus Contact <contact@imanfocus.app>";

const MAX = { name: 120, email: 200, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message
  ) {
    return NextResponse.json(
      { ok: false, error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration — don't leak details, but make it debuggable in logs.
    console.error("RESEND_API_KEY is not set; cannot send contact email.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact service is not configured yet. Please email us directly at hello@imanfocus.app.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #13270b;">
          <h2 style="margin: 0 0 12px;">New contact form message</h2>
          <p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 12px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your message right now. Please try again, or email hello@imanfocus.app.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side. Please try again, or email hello@imanfocus.app.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
