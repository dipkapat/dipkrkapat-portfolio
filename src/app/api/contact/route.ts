import { Resend } from "resend";
import { validateContactInput } from "@/lib/validation";

export async function POST(request: Request) {
	const payload: unknown = await request.json().catch(() => null);

	if (!payload || typeof payload !== "object") {
		return Response.json(
			{ ok: false, message: "Invalid request body." },
			{ status: 400 },
		);
	}

	// Honeypot: a bot fills the hidden field; silently succeed.
	const { website, ...data } = payload as Record<string, unknown> & {
		website?: string;
	};
	if (website) {
		return Response.json({ ok: true });
	}

	const parsed = validateContactInput(data);
	if (!parsed.success) {
		const fieldErrors = Object.fromEntries(
			Object.entries(parsed.error.flatten().fieldErrors).map(
				([key, value]) => [
					key,
					Array.isArray(value) ? value[0] : undefined,
				],
			),
		);
		return Response.json(
			{ ok: false, message: "Validation failed.", fieldErrors },
			{ status: 400 },
		);
	}

	const apiKey = process.env.RESEND_API_KEY;
	const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
	const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

	if (!apiKey || !fromEmail || !toEmail) {
		console.error(
			"[contact] Resend not configured. Set RESEND_API_KEY, CONTACT_FORM_FROM_EMAIL, CONTACT_FORM_TO_EMAIL.",
		);
		return Response.json(
			{
				ok: false,
				message:
					"The contact form is not configured yet. Please email me directly.",
			},
			{ status: 503 },
		);
	}

	const { name, email, company, inquiryType, message } = parsed.data;
	const companyLine = company ? `\nCompany: ${company}` : "";

	try {
		const resend = new Resend(apiKey);
		const { error } = await resend.emails.send({
			from: fromEmail,
			to: [toEmail],
			replyTo: email,
			subject: `Portfolio inquiry - ${inquiryType} - ${name}`,
			text: `Name: ${name}\nEmail: ${email}${companyLine}\nInquiry type: ${inquiryType}\n\nMessage:\n${message}`,
		});

		if (error) {
			console.error("[contact] Resend error:", error);
			return Response.json(
				{
					ok: false,
					message: "Failed to send your message. Please try again.",
				},
				{ status: 500 },
			);
		}

		return Response.json({
			ok: true,
			message: `Thanks, ${name.split(" ")[0]}! Your message is on its way.`,
		});
	} catch (error) {
		console.error("[contact] Unexpected error:", error);
		return Response.json(
			{ ok: false, message: "Something went wrong. Please try again." },
			{ status: 500 },
		);
	}
}
