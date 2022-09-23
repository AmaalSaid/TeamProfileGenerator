const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Tests", () => {
        it("should return correct constructors", () => {
            const name = "Declan";
            const id = 33;
            const email = "Declan@gmail.com";
            const github = "https://github.com/Declan22"

            const obj = new Engineer(name, id, email, github);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getGithub()).toEqual(github);
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
})