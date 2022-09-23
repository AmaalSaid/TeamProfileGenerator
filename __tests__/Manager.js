const manager = require("../lib/manager");

describe("Manager", () => {
    describe("Tests", () => {
        it("should return correct constructors", () => {
            const name = "Amaal";
            const id = 4;
            const email = "Amaal@gmail.com";
            const officeNumber = 4

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
            expect(obj.getRole()).toEqual("Manager");
        })
    })
})
