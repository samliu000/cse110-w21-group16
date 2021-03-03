function cov_1vdz2g6g46() {
  var path = "C:\\Users\\boo13\\CSE110\\cse110-w21-group16\\source\\cypress\\integration\\examples\\waiting.spec.js";
  var hash = "7f172e6f59ba9749b8e4adf97c583fbfad0e71ef";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\boo13\\CSE110\\cse110-w21-group16\\source\\cypress\\integration\\examples\\waiting.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 31,
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
          column: 59
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      "4": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 59
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 59
        }
      },
      "7": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 17
        }
      },
      "8": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 59
        }
      },
      "9": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 17
        }
      },
      "10": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 30,
          column: 4
        }
      },
      "11": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 57
        }
      },
      "12": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 34
        }
      },
      "13": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 84
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 25
          },
          end: {
            line: 31,
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
            line: 11,
            column: 55
          },
          end: {
            line: 11,
            column: 56
          }
        },
        loc: {
          start: {
            line: 11,
            column: 61
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 46
          },
          end: {
            line: 20,
            column: 47
          }
        },
        loc: {
          start: {
            line: 20,
            column: 52
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 20
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7f172e6f59ba9749b8e4adf97c583fbfad0e71ef"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vdz2g6g46 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1vdz2g6g46();
cov_1vdz2g6g46().s[0]++;
/// <reference types="cypress" />
context('Waiting', () => {
  cov_1vdz2g6g46().f[0]++;
  cov_1vdz2g6g46().s[1]++;
  beforeEach(() => {
    cov_1vdz2g6g46().f[1]++;
    cov_1vdz2g6g46().s[2]++;
    cy.visit('https://example.cypress.io/commands/waiting');
  }); // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting
  // https://on.cypress.io/wait

  cov_1vdz2g6g46().s[3]++;
  it('cy.wait() - wait for a specific amount of time', () => {
    cov_1vdz2g6g46().f[2]++;
    cov_1vdz2g6g46().s[4]++;
    cy.get('.wait-input1').type('Wait 1000ms after typing');
    cov_1vdz2g6g46().s[5]++;
    cy.wait(1000);
    cov_1vdz2g6g46().s[6]++;
    cy.get('.wait-input2').type('Wait 1000ms after typing');
    cov_1vdz2g6g46().s[7]++;
    cy.wait(1000);
    cov_1vdz2g6g46().s[8]++;
    cy.get('.wait-input3').type('Wait 1000ms after typing');
    cov_1vdz2g6g46().s[9]++;
    cy.wait(1000);
  });
  cov_1vdz2g6g46().s[10]++;
  it('cy.wait() - wait for a specific route', () => {
    cov_1vdz2g6g46().f[3]++;
    cov_1vdz2g6g46().s[11]++;
    // Listen to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment'); // we have code that gets a comment when
    // the button is clicked in scripts.js

    cov_1vdz2g6g46().s[12]++;
    cy.get('.network-btn').click(); // wait for GET comments/1

    cov_1vdz2g6g46().s[13]++;
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmcuc3BlYy5qcyJdLCJuYW1lcyI6WyJjb250ZXh0IiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsInR5cGUiLCJ3YWl0IiwiaW50ZXJjZXB0IiwiYXMiLCJjbGljayIsIml0cyIsInNob3VsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUVBQSxPQUFPLENBQUMsU0FBRCxFQUFZLE1BQU07QUFBQTtBQUFBO0FBQ3ZCQyxFQUFBQSxVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDZkMsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsNkNBQVQ7QUFDRCxHQUZTLENBQVYsQ0FEdUIsQ0FJdkI7QUFDQTtBQUVBOztBQVB1QjtBQVF2QkMsRUFBQUEsRUFBRSxDQUFDLGdEQUFELEVBQW1ELE1BQU07QUFBQTtBQUFBO0FBQ3pERixJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxjQUFQLEVBQXVCQyxJQUF2QixDQUE0QiwwQkFBNUI7QUFEeUQ7QUFFekRKLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLElBQVI7QUFGeUQ7QUFHekRMLElBQUFBLEVBQUUsQ0FBQ0csR0FBSCxDQUFPLGNBQVAsRUFBdUJDLElBQXZCLENBQTRCLDBCQUE1QjtBQUh5RDtBQUl6REosSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsSUFBUjtBQUp5RDtBQUt6REwsSUFBQUEsRUFBRSxDQUFDRyxHQUFILENBQU8sY0FBUCxFQUF1QkMsSUFBdkIsQ0FBNEIsMEJBQTVCO0FBTHlEO0FBTXpESixJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSxJQUFSO0FBQ0QsR0FQQyxDQUFGO0FBUnVCO0FBaUJ2QkgsRUFBQUEsRUFBRSxDQUFDLHVDQUFELEVBQTBDLE1BQU07QUFBQTtBQUFBO0FBQ2hEO0FBQ0FGLElBQUFBLEVBQUUsQ0FBQ00sU0FBSCxDQUFhLEtBQWIsRUFBb0IsZUFBcEIsRUFBcUNDLEVBQXJDLENBQXdDLFlBQXhDLEVBRmdELENBSWhEO0FBQ0E7O0FBTGdEO0FBTWhEUCxJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxjQUFQLEVBQXVCSyxLQUF2QixHQU5nRCxDQVFoRDs7QUFSZ0Q7QUFTaERSLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLGFBQVIsRUFBdUJJLEdBQXZCLENBQTJCLHFCQUEzQixFQUFrREMsTUFBbEQsQ0FBeUQsVUFBekQsRUFBcUUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFyRTtBQUNELEdBVkMsQ0FBRjtBQVdELENBNUJNLENBQVAiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxyXG5cclxuY29udGV4dCgnV2FpdGluZycsICgpID0+IHtcclxuICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pby9jb21tYW5kcy93YWl0aW5nJylcclxuICB9KVxyXG4gIC8vIEJFIENBUkVGVUwgb2YgYWRkaW5nIHVubmVjZXNzYXJ5IHdhaXQgdGltZXMuXHJcbiAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2Jlc3QtcHJhY3RpY2VzI1VubmVjZXNzYXJ5LVdhaXRpbmdcclxuXHJcbiAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dhaXRcclxuICBpdCgnY3kud2FpdCgpIC0gd2FpdCBmb3IgYSBzcGVjaWZpYyBhbW91bnQgb2YgdGltZScsICgpID0+IHtcclxuICAgIGN5LmdldCgnLndhaXQtaW5wdXQxJykudHlwZSgnV2FpdCAxMDAwbXMgYWZ0ZXIgdHlwaW5nJylcclxuICAgIGN5LndhaXQoMTAwMClcclxuICAgIGN5LmdldCgnLndhaXQtaW5wdXQyJykudHlwZSgnV2FpdCAxMDAwbXMgYWZ0ZXIgdHlwaW5nJylcclxuICAgIGN5LndhaXQoMTAwMClcclxuICAgIGN5LmdldCgnLndhaXQtaW5wdXQzJykudHlwZSgnV2FpdCAxMDAwbXMgYWZ0ZXIgdHlwaW5nJylcclxuICAgIGN5LndhaXQoMTAwMClcclxuICB9KVxyXG5cclxuICBpdCgnY3kud2FpdCgpIC0gd2FpdCBmb3IgYSBzcGVjaWZpYyByb3V0ZScsICgpID0+IHtcclxuICAgIC8vIExpc3RlbiB0byBHRVQgdG8gY29tbWVudHMvMVxyXG4gICAgY3kuaW50ZXJjZXB0KCdHRVQnLCAnKiovY29tbWVudHMvKicpLmFzKCdnZXRDb21tZW50JylcclxuXHJcbiAgICAvLyB3ZSBoYXZlIGNvZGUgdGhhdCBnZXRzIGEgY29tbWVudCB3aGVuXHJcbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xyXG4gICAgY3kuZ2V0KCcubmV0d29yay1idG4nKS5jbGljaygpXHJcblxyXG4gICAgLy8gd2FpdCBmb3IgR0VUIGNvbW1lbnRzLzFcclxuICAgIGN5LndhaXQoJ0BnZXRDb21tZW50JykuaXRzKCdyZXNwb25zZS5zdGF0dXNDb2RlJykuc2hvdWxkKCdiZS5vbmVPZicsIFsyMDAsIDMwNF0pXHJcbiAgfSlcclxufSlcclxuIl19