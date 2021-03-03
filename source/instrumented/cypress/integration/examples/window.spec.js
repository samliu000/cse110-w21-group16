function cov_geyzaaj3s() {
  var path = "C:\\Users\\boo13\\CSE110\\cse110-w21-group16\\source\\cypress\\integration\\examples\\window.spec.js";
  var hash = "542f225dfbe549e393b8cdf692117c732df56713";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\boo13\\CSE110\\cse110-w21-group16\\source\\cypress\\integration\\examples\\window.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 22,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 4
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 58
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 46
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 16,
          column: 4
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 71
        }
      },
      "7": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      },
      "8": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 18
          },
          end: {
            line: 3,
            column: 19
          }
        },
        loc: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 14
          }
        },
        loc: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 6,
            column: 3
          }
        },
        line: 4
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 8,
            column: 51
          },
          end: {
            line: 8,
            column: 52
          }
        },
        loc: {
          start: {
            line: 8,
            column: 57
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 13,
            column: 48
          },
          end: {
            line: 13,
            column: 49
          }
        },
        loc: {
          start: {
            line: 13,
            column: 54
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 13
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 18,
            column: 35
          },
          end: {
            line: 18,
            column: 36
          }
        },
        loc: {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "542f225dfbe549e393b8cdf692117c732df56713"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_geyzaaj3s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_geyzaaj3s();
cov_geyzaaj3s().s[0]++;
/// <reference types="cypress" />
context('Window', () => {
  cov_geyzaaj3s().f[0]++;
  cov_geyzaaj3s().s[1]++;
  beforeEach(() => {
    cov_geyzaaj3s().f[1]++;
    cov_geyzaaj3s().s[2]++;
    cy.visit('https://example.cypress.io/commands/window');
  });
  cov_geyzaaj3s().s[3]++;
  it('cy.window() - get the global window object', () => {
    cov_geyzaaj3s().f[2]++;
    cov_geyzaaj3s().s[4]++;
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top');
  });
  cov_geyzaaj3s().s[5]++;
  it('cy.document() - get the document object', () => {
    cov_geyzaaj3s().f[3]++;
    cov_geyzaaj3s().s[6]++;
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });
  cov_geyzaaj3s().s[7]++;
  it('cy.title() - get the title', () => {
    cov_geyzaaj3s().f[4]++;
    cov_geyzaaj3s().s[8]++;
    // https://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmRvdy5zcGVjLmpzIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0Iiwid2luZG93Iiwic2hvdWxkIiwiZG9jdW1lbnQiLCJhbmQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUVBQSxPQUFPLENBQUMsUUFBRCxFQUFXLE1BQU07QUFBQTtBQUFBO0FBQ3RCQyxFQUFBQSxVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDZkMsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsNENBQVQ7QUFDRCxHQUZTLENBQVY7QUFEc0I7QUFLdEJDLEVBQUFBLEVBQUUsQ0FBQyw0Q0FBRCxFQUErQyxNQUFNO0FBQUE7QUFBQTtBQUNyRDtBQUNBRixJQUFBQSxFQUFFLENBQUNHLE1BQUgsR0FBWUMsTUFBWixDQUFtQixlQUFuQixFQUFvQyxLQUFwQztBQUNELEdBSEMsQ0FBRjtBQUxzQjtBQVV0QkYsRUFBQUEsRUFBRSxDQUFDLHlDQUFELEVBQTRDLE1BQU07QUFBQTtBQUFBO0FBQ2xEO0FBQ0FGLElBQUFBLEVBQUUsQ0FBQ0ssUUFBSCxHQUFjRCxNQUFkLENBQXFCLGVBQXJCLEVBQXNDLFNBQXRDLEVBQWlERSxHQUFqRCxDQUFxRCxJQUFyRCxFQUEyRCxPQUEzRDtBQUNELEdBSEMsQ0FBRjtBQVZzQjtBQWV0QkosRUFBQUEsRUFBRSxDQUFDLDRCQUFELEVBQStCLE1BQU07QUFBQTtBQUFBO0FBQ3JDO0FBQ0FGLElBQUFBLEVBQUUsQ0FBQ08sS0FBSCxHQUFXSCxNQUFYLENBQWtCLFNBQWxCLEVBQTZCLGNBQTdCO0FBQ0QsR0FIQyxDQUFGO0FBSUQsQ0FuQk0sQ0FBUCIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XHJcblxyXG5jb250ZXh0KCdXaW5kb3cnLCAoKSA9PiB7XHJcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvd2luZG93JylcclxuICB9KVxyXG5cclxuICBpdCgnY3kud2luZG93KCkgLSBnZXQgdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0JywgKCkgPT4ge1xyXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dpbmRvd1xyXG4gICAgY3kud2luZG93KCkuc2hvdWxkKCdoYXZlLnByb3BlcnR5JywgJ3RvcCcpXHJcbiAgfSlcclxuXHJcbiAgaXQoJ2N5LmRvY3VtZW50KCkgLSBnZXQgdGhlIGRvY3VtZW50IG9iamVjdCcsICgpID0+IHtcclxuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9kb2N1bWVudFxyXG4gICAgY3kuZG9jdW1lbnQoKS5zaG91bGQoJ2hhdmUucHJvcGVydHknLCAnY2hhcnNldCcpLmFuZCgnZXEnLCAnVVRGLTgnKVxyXG4gIH0pXHJcblxyXG4gIGl0KCdjeS50aXRsZSgpIC0gZ2V0IHRoZSB0aXRsZScsICgpID0+IHtcclxuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby90aXRsZVxyXG4gICAgY3kudGl0bGUoKS5zaG91bGQoJ2luY2x1ZGUnLCAnS2l0Y2hlbiBTaW5rJylcclxuICB9KVxyXG59KVxyXG4iXX0=