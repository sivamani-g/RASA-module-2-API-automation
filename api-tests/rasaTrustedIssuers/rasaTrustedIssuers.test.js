const apiClient = require("../../utils/apiClient");

describe("RASA Trusted Issuers API", () => {
    test("TC-001: Get Trusted Issuers", async () => {
        const tokenAddr =
            "0x75c7AFa487e5Db736BDAa4A13f28D882ED029a93";

        const response = await apiClient.get(
            `/tedaas/v1/rasa/${tokenAddr}/identity-registry/trusted-issuers`,
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