import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const dynamodb = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    convertEmptyValues: false,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

export interface EmailSignup {
  email: string;
  createdAt: string;
  pk?: string;
  status?: string;
  ttl?: number;
}

export async function saveEmailSignup(email: string): Promise<{ success: boolean; id: string }> {
  const now = new Date().toISOString();
  
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME || "forge-signups-prod",
    Item: {
      email,
      createdAt: now,
      pk: "SIGNUP", // Partition key for GSI queries
      status: "active",
      // TTL set to 1 year from now (in seconds)
      ttl: Math.floor(Date.now() / 1000) + (365 * 24 * 60 * 60),
    },
    ConditionExpression: "attribute_not_exists(email)", // Prevent duplicates
  };

  try {
    await dynamodb.send(new PutCommand(params));
    return { success: true, id: `${email}-${now}` };
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'name' in error && error.name === "ConditionalCheckFailedException") {
      // Email already exists - return success to avoid exposing this info
      return { success: true, id: `${email}-existing` };
    }
    throw error;
  }
}

export async function checkEmailExists(email: string): Promise<boolean> {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME || "forge-signups-prod",
    Key: { 
      email
    },
  };

  try {
    const result = await dynamodb.send(new GetCommand(params));
    return !!result.Item;
  } catch {
    return false;
  }
}

export async function getRecentSignups(limit: number = 10): Promise<EmailSignup[]> {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME || "forge-signups-prod",
    IndexName: "createdAtIndex",
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": "SIGNUP",
    },
    ScanIndexForward: false, // Sort descending (newest first)
    Limit: limit,
  };

  try {
    const result = await dynamodb.send(new QueryCommand(params));
    return (result.Items || []) as EmailSignup[];
  } catch (error) {
    console.error("Error fetching recent signups:", error);
    return [];
  }
}