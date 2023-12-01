import { describe, expect, test } from 'vitest'

let name = "tata"

describe("decouverte_test", () => {
  
  describe("test_toto", () => {
    
    test("le nom", () => {
      expect(name).toThrow(Error); // le toThorow pas encore trop compir
    });
    
    test("vérification du name", () => {
      expect(name).toEqual("toto");
    });
  
  });
});