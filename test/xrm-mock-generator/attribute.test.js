describe("XrmMockGenerator.Attribute", function () {
    var XrmMock = require("xrm-mock");
    var XrmMockGenerator = require("../../src/xrm-mock-generator.js");

    beforeEach(function () {
        XrmMockGenerator.initialise();
    });

    it("should exist", function () {
        expect(XrmMockGenerator.Attribute).toBeDefined();
    });

    it("should create a string", function () {
        XrmMockGenerator.Attribute.createString("new_string", "random string");
        expect(Xrm.Page.getAttribute("new_string").getValue()).toBe("random string");
    });

    it("should create a bool", function () {
        XrmMockGenerator.Attribute.createBool("new_havingfun", true);
        expect(Xrm.Page.getAttribute("new_havingfun").getValue()).toBe(true);
    });

    it("should create a date", function () {
        var date = new Date(2017, 1, 1);
        XrmMockGenerator.Attribute.createDate("birthdate", date);
        expect(Xrm.Page.getAttribute("birthdate").getValue()).toBe(date);
    });

    it("should create a datetime", function () {
        var date = new Date(2017, 1, 1);
        XrmMockGenerator.Attribute.createDateTime("birthdate", date);
        expect(Xrm.Page.getAttribute("birthdate").getValue()).toBe(date);
    });

    it("should create a lookup", function () {
        var lookup = { id: "5", entityType: "contact", name: "Joe" };
        XrmMockGenerator.Attribute.createLookup("primarycustomerid", lookup);
        expect(Xrm.Page.getAttribute("primarycustomerid").getValue()[0].id).toBe("5");
    });

    it("should create an option set", function () {
        var optionSet = [
          { value: 0, text: 'zero' },
          { value: 1, text: 'one' },
          { value: 2, text: 'two' },
        ];
        XrmMockGenerator.Attribute.createOptionSet("new_optionset", optionSet);
        expect(Xrm.Page.getAttribute("new_optionset").getOptions()).toEqual(optionSet);
    });

    it("should create a string control as well", function () {
        XrmMockGenerator.Attribute.createString("firstname", "Joe");
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe");
        expect(Xrm.Page.getControl("firstname").getDisabled()).toBe(false);
    });
});
