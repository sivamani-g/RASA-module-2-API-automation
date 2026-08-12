const apiClient = require("../../utils/apiClient");

describe("RASA Trusted Issuer API", () => {
    test("TC-001: Get Trusted Issuer Details", async () => {
        const tokenAddr =
            "0x75c7AFa487e5Db736BDAa4A13f28D882ED029a93";

        const issuer =
            "0x6A4227d94F6f4aEa69C8daFe09B56015297D594F";

        const response = await apiClient.get(
            `/tedaas/v1/rasa/${tokenAddr}/identity-registry/trusted-issuers/${issuer}`,
            {
                params: {
                    world_id: "52fa002c023e4471b041bipp1"
                }
            }
        );

        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });
});