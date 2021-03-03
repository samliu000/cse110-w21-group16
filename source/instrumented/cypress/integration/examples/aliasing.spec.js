function cov_1d34qlwmxk() {
  var path = "C:\\Users\\boo13\\CSE110\\cse110-w21-group16\\source\\cypress\\integration\\examples\\aliasing.spec.js";
  var hash = "88c4845df610983c87f9f69ade973a8382acaf13";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\boo13\\CSE110\\cse110-w21-group16\\source\\cypress\\integration\\examples\\aliasing.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 39,
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
          column: 60
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 36
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 32
        }
      },
      "7": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 57
        }
      },
      "9": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 34
        }
      },
      "10": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 71
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 39,
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
            column: 50
          },
          end: {
            line: 8,
            column: 51
          }
        },
        loc: {
          start: {
            line: 8,
            column: 56
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 44
          },
          end: {
            line: 28,
            column: 45
          }
        },
        loc: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 28
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "88c4845df610983c87f9f69ade973a8382acaf13"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d34qlwmxk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1d34qlwmxk();
cov_1d34qlwmxk().s[0]++;
/// <reference types="cypress" />
context('Aliasing', () => {
  cov_1d34qlwmxk().f[0]++;
  cov_1d34qlwmxk().s[1]++;
  beforeEach(() => {
    cov_1d34qlwmxk().f[1]++;
    cov_1d34qlwmxk().s[2]++;
    cy.visit('https://example.cypress.io/commands/aliasing');
  });
  cov_1d34qlwmxk().s[3]++;
  it('.as() - alias a DOM element for later use', () => {
    cov_1d34qlwmxk().f[2]++;
    cov_1d34qlwmxk().s[4]++;
    // https://on.cypress.io/as
    // Alias a DOM element for use later
    // We don't have to traverse to the element
    // later in our code, we reference it with @
    cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn'); // when we reference the alias, we place an
    // @ in front of its name

    cov_1d34qlwmxk().s[5]++;
    cy.get('@firstBtn').click();
    cov_1d34qlwmxk().s[6]++;
    cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');
  });
  cov_1d34qlwmxk().s[7]++;
  it('.as() - alias a route for later use', () => {
    cov_1d34qlwmxk().f[3]++;
    cov_1d34qlwmxk().s[8]++;
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*').as('getComment'); // we have code that gets a comment when
    // the button is clicked in scripts.js

    cov_1d34qlwmxk().s[9]++;
    cy.get('.network-btn').click(); // https://on.cypress.io/wait

    cov_1d34qlwmxk().s[10]++;
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaWFzaW5nLnNwZWMuanMiXSwibmFtZXMiOlsiY29udGV4dCIsImJlZm9yZUVhY2giLCJjeSIsInZpc2l0IiwiaXQiLCJnZXQiLCJmaW5kIiwiZmlyc3QiLCJhcyIsImNsaWNrIiwic2hvdWxkIiwiYW5kIiwiaW50ZXJjZXB0Iiwid2FpdCIsIml0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUVBQSxPQUFPLENBQUMsVUFBRCxFQUFhLE1BQU07QUFBQTtBQUFBO0FBQ3hCQyxFQUFBQSxVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDZkMsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsOENBQVQ7QUFDRCxHQUZTLENBQVY7QUFEd0I7QUFLeEJDLEVBQUFBLEVBQUUsQ0FBQywyQ0FBRCxFQUE4QyxNQUFNO0FBQUE7QUFBQTtBQUNwRDtBQUVBO0FBQ0E7QUFDQTtBQUVBRixJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxXQUFQLEVBQW9CQyxJQUFwQixDQUF5QixVQUF6QixFQUNHQyxLQURILEdBQ1dELElBRFgsQ0FDZ0IsSUFEaEIsRUFDc0JDLEtBRHRCLEdBRUdELElBRkgsQ0FFUSxRQUZSLEVBRWtCRSxFQUZsQixDQUVxQixVQUZyQixFQVBvRCxDQVdwRDtBQUNBOztBQVpvRDtBQWFwRE4sSUFBQUEsRUFBRSxDQUFDRyxHQUFILENBQU8sV0FBUCxFQUFvQkksS0FBcEI7QUFib0Q7QUFlcERQLElBQUFBLEVBQUUsQ0FBQ0csR0FBSCxDQUFPLFdBQVAsRUFDR0ssTUFESCxDQUNVLFlBRFYsRUFDd0IsYUFEeEIsRUFFR0MsR0FGSCxDQUVPLFNBRlAsRUFFa0IsU0FGbEI7QUFHRCxHQWxCQyxDQUFGO0FBTHdCO0FBeUJ4QlAsRUFBQUEsRUFBRSxDQUFDLHFDQUFELEVBQXdDLE1BQU07QUFBQTtBQUFBO0FBQzlDO0FBQ0FGLElBQUFBLEVBQUUsQ0FBQ1UsU0FBSCxDQUFhLEtBQWIsRUFBb0IsZUFBcEIsRUFBcUNKLEVBQXJDLENBQXdDLFlBQXhDLEVBRjhDLENBSTlDO0FBQ0E7O0FBTDhDO0FBTTlDTixJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxjQUFQLEVBQXVCSSxLQUF2QixHQU44QyxDQVE5Qzs7QUFSOEM7QUFTOUNQLElBQUFBLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLGFBQVIsRUFBdUJDLEdBQXZCLENBQTJCLHFCQUEzQixFQUFrREosTUFBbEQsQ0FBeUQsSUFBekQsRUFBK0QsR0FBL0Q7QUFDRCxHQVZDLENBQUY7QUFXRCxDQXBDTSxDQUFQIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cclxuXHJcbmNvbnRleHQoJ0FsaWFzaW5nJywgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vZXhhbXBsZS5jeXByZXNzLmlvL2NvbW1hbmRzL2FsaWFzaW5nJylcclxuICB9KVxyXG5cclxuICBpdCgnLmFzKCkgLSBhbGlhcyBhIERPTSBlbGVtZW50IGZvciBsYXRlciB1c2UnLCAoKSA9PiB7XHJcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vYXNcclxuXHJcbiAgICAvLyBBbGlhcyBhIERPTSBlbGVtZW50IGZvciB1c2UgbGF0ZXJcclxuICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gdHJhdmVyc2UgdG8gdGhlIGVsZW1lbnRcclxuICAgIC8vIGxhdGVyIGluIG91ciBjb2RlLCB3ZSByZWZlcmVuY2UgaXQgd2l0aCBAXHJcblxyXG4gICAgY3kuZ2V0KCcuYXMtdGFibGUnKS5maW5kKCd0Ym9keT50cicpXHJcbiAgICAgIC5maXJzdCgpLmZpbmQoJ3RkJykuZmlyc3QoKVxyXG4gICAgICAuZmluZCgnYnV0dG9uJykuYXMoJ2ZpcnN0QnRuJylcclxuXHJcbiAgICAvLyB3aGVuIHdlIHJlZmVyZW5jZSB0aGUgYWxpYXMsIHdlIHBsYWNlIGFuXHJcbiAgICAvLyBAIGluIGZyb250IG9mIGl0cyBuYW1lXHJcbiAgICBjeS5nZXQoJ0BmaXJzdEJ0bicpLmNsaWNrKClcclxuXHJcbiAgICBjeS5nZXQoJ0BmaXJzdEJ0bicpXHJcbiAgICAgIC5zaG91bGQoJ2hhdmUuY2xhc3MnLCAnYnRuLXN1Y2Nlc3MnKVxyXG4gICAgICAuYW5kKCdjb250YWluJywgJ0NoYW5nZWQnKVxyXG4gIH0pXHJcblxyXG4gIGl0KCcuYXMoKSAtIGFsaWFzIGEgcm91dGUgZm9yIGxhdGVyIHVzZScsICgpID0+IHtcclxuICAgIC8vIEFsaWFzIHRoZSByb3V0ZSB0byB3YWl0IGZvciBpdHMgcmVzcG9uc2VcclxuICAgIGN5LmludGVyY2VwdCgnR0VUJywgJyoqL2NvbW1lbnRzLyonKS5hcygnZ2V0Q29tbWVudCcpXHJcblxyXG4gICAgLy8gd2UgaGF2ZSBjb2RlIHRoYXQgZ2V0cyBhIGNvbW1lbnQgd2hlblxyXG4gICAgLy8gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIGluIHNjcmlwdHMuanNcclxuICAgIGN5LmdldCgnLm5ldHdvcmstYnRuJykuY2xpY2soKVxyXG5cclxuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby93YWl0XHJcbiAgICBjeS53YWl0KCdAZ2V0Q29tbWVudCcpLml0cygncmVzcG9uc2Uuc3RhdHVzQ29kZScpLnNob3VsZCgnZXEnLCAyMDApXHJcbiAgfSlcclxufSlcclxuIl19