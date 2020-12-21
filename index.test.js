import playGame, {
  getUserChoice,
  getComputerChoice,
  determineWinner,
} from "./";

describe("getUserChoice()", () => {
  it("lower-cases valid inputs", () => {
    expect(getUserChoice("Rock")).toBe("rock");
    expect(getUserChoice("PAPER ")).toBe("paper");
    expect(getUserChoice(" sCisSoRs   ")).toBe("scissors");
  });

  it("shows error and returns nothing for invalid inputs", () => {
    console.log = jest.fn();
    expect(getUserChoice("Rocket")).toBeUndefined();
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});

describe("getComputerChoice()", () => {
  it("returns one of: rock, paper, scissors", () => {
    Array(10)
      .fill(0)
      .forEach((_) => {
        expect(["rock", "paper", "scissors"]).toContain(getComputerChoice());
      });
  });
});

describe("determineWinner()", () => {
  it("should return 'tie' if parameters are equal", () => {
    expect(determineWinner("rock", "rock")).toBe("tie");
    expect(determineWinner("paper", "paper")).toBe("tie");
    expect(determineWinner("scissors", "scissors")).toBe("tie");
  });

  it("should return 'user won' when user wins", () => {
    expect(determineWinner("rock", "scissors")).toBe("user won");
    expect(determineWinner("paper", "rock")).toBe("user won");
    expect(determineWinner("scissors", "paper")).toBe("user won");
  });

  it("should return 'computer won' when user wins", () => {
    expect(determineWinner("scissors", "rock")).toBe("computer won");
    expect(determineWinner("rock", "paper")).toBe("computer won");
    expect(determineWinner("paper", "scissors")).toBe("computer won");
  });
});

describe("user chose 'bomb'", () => {
  it("valid input for getUserChoice()", () => {
    expect(getUserChoice("BOMB")).toBe("bomb");
  });

  it("user always wins in determineWinner()", () => {
    expect(determineWinner("bomb", "rock")).toBe("user won");
    expect(determineWinner("bomb", "paper")).toBe("user won");
    expect(determineWinner("bomb", "scissors")).toBe("user won");
  });
});
