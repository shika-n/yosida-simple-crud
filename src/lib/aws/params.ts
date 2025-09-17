import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient({
	region: "us-east-1",
});

async function getParam(key: string, isEncrypted: boolean) {
	const cmd = new GetParameterCommand({
		Name: key,
		WithDecryption: isEncrypted,
	});

	const result = await ssmClient.send(cmd);
	return result;
}

async function getDbCredentials() {
	return {
		username: await getParam("/rk/prod/mysql/dbuser", false),
		password: await getParam("/rk/prod/mysql/dbpass", false),
	};
}
