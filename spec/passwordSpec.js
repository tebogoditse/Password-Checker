describe("A suite is just a function", function() {

  it("password must be be 8 characters or longer ", function() {
    expect(validate("tebogoD19")).toBe(true);
  });
  it("password must include at least one uppercase letter", function() {
    expect(validate("tebogod19")).toBe(false);
  });
  it("password must include at least one digit character", function() {
    expect(validate("tebogoDitse")).toBe(false);
  });
  it("password must include at least one lowercase character", function() {
    expect(validate("TEBOGO959857987")).toBe(false);
  });
  it("password must contain an uppercase, lowercase and digit character", function() {
    expect(validate("Tditse1heuyeu")).toBe(true);
  });
  it("password must contain an uppercase, lowercase and digit character", function () {
    expect(validate("tebogoditse1D")).toBe(true);
  })
  it("password is 8 characters or longer", function () {
    expect(password_is_ok("tebogoditse9")).toBe(true);
  })
  it("password is 8 character or longer", function () {
    expect(password_is_ok("tebogo_ditse94949")).toBe(true);
  });
  it("password shouldn't be 7 characters or less", function () {
    expect(password_is_ok("20190")).toBe(false);
  });


});
