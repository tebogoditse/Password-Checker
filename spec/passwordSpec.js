describe("A suite is just a function", function() {

  it("valid password", function() {
    expect(validate("tebogoD19")).toBe("valid password");
  });
  it("valid password", function() {
    expect(validate("Tditse1heuyeu")).toBe("valid password");
  });
  it("invalid password", function () {
    expect(validate("tebogoditse1D")).toBe("valid password");
  })
  it("invalid password", function () {
    expect(password_is_ok("tebogoditse9")).toBe("valid password");
  })
  it("invalid password", function () {
    expect(password_is_ok("20190815")).toBe("valid password");
  })
  it("invalid password", function () {
    expect(password_is_ok("TEBOGO199?")).toBe("valid password");
  })
  it("invalid password", function () {
    expect(password_is_ok("tebogo_ditse94949")).toBe("valid password");
  })



});
