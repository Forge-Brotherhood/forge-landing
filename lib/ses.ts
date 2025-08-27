import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendBetaSignupEmail(email: string): Promise<boolean> {
  const currentYear = new Date().getFullYear();
  
  const params = {
    Source: process.env.SES_FROM_EMAIL || "noreply@forge-app.io",
    Destination: {
      ToAddresses: [email],
    },
    Template: "ForgeBetaSignup",
    TemplateData: JSON.stringify({
      supportUrl: "https://forge-app.io/support",
      year: currentYear.toString(),
    }),
  };

  try {
    await sesClient.send(new SendTemplatedEmailCommand(params));
    console.log(`Beta signup email sent successfully to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send beta signup email to ${email}:`, error);
    // Don't throw the error - we don't want to fail the signup if email fails
    // You might want to log this to a monitoring service
    return false;
  }
}