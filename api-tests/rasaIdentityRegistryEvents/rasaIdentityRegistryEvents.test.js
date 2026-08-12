const apiClient = require("../../utils/apiClient");

describe("RASA Identity Registry Events API", () => {
    test("TC-001: Get Identity Registry Events", async () => {
        const tokenAddr =
            "0x75c7AFa487e5Db736BDAa4A13f28D882ED029a93";

        const response = await apiClient.get(
            `/tedaas/v1/rasa/${tokenAddr}/identity-registry/events`,
            {
                params: {
                    from_block: 1000000,
                    to_block: 1894523,
                    limit: 50,
                    cursor: 50,
                    world_id: "52fa002c023e4471b041bipp1"
                }
            }
        );

        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });
});