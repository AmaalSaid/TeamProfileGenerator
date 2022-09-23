const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Tests", () => {
        it("should return correct constructors", () => {
            const name = "Declan";
            const id = 5;
            const email = "Declan@gmail.com";
            const school = "MIT"

            const obj = new Intern(name, id, email, school);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getSchool()).toEqual(school);
            expect(obj.getRole()).toEqual("Intern");
        })
    })
})