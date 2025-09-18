import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient({
	region: "us-east-1",
});

export async function getParam(key: string, isEncrypted: boolean) {
	try {
		const cmd = new GetParameterCommand({
			Name: key,
			WithDecryption: isEncrypted,
		});

		const result = await ssmClient.send(cmd);
		return result;
	} catch (e) {
		console.log("Param error:", e);
		return null;
	}
}
