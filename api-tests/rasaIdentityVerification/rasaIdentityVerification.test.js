const apiClient = require("../../utils/apiClient");

describe("RASA Identity Verification API", () => {
    test("TC-001: Get Identity Verification", async () => {
        const tokenAddr =
            "0x75c7AFa487e5Db736BDAa4A13f28D882ED029a93";

        const holder =
            "0x3b5C5A36930cb12A301Db1479E164550de29CC02";

        const response = await apiClient.get(
            `/tedaas/v1/rasa/${tokenAddr}/identity-registry/identities/${holder}/verification`,
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