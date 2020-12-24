const Goal2021 = artifacts.require("Goal2021");
const goal = ["This is goal 1.", "This is goal 2."];
contract("Goal2021", (accounts) => {
    let [alice] = accounts;
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await Goal2021.new();
    });
    it("Should be able to set goal", async () => {
        const result = await contractInstance.setMyGoal(goal[0], {from: alice});
        assert.equal(result.receipt.status, true);
    })
    it("Should be able to set lucky number", async () => {
        const result = await contractInstance.setMyLuckyNum(42, {from: alice});
        assert.equal(result.receipt.status, true);
    })
    it ("Shoud restrict to set goal more than once", async () =>{
        await contractInstance.setMyGoal(goal[0], {from: alice});
        try {
            //try to create the second zombie
            await contractInstance.setMyGoal(goal[1], {from: alice});
            assert(true);
          }
          catch (err) {
            return;
          }
        assert(false, "The contract did not throw.");
    })
    it ("Shoud be able to show goal", async () =>{
        await contractInstance.setMyGoal(goal[0], {from: alice});
        const result = await contractInstance.getMyGoal(alice);
        assert.equal(result, goal[0]);
    })
    it ("Shoud be able to show number", async () =>{
        await contractInstance.setMyLuckyNum(42, {from: alice});
        const result = await contractInstance.getMyLuckyNum(alice);
        assert.equal(result, 42);
    })
})