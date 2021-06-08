// 1) Sections
// As PD Admin
//   Visiting sections page
//     "before all" hook for "should display list of user's own sections":
// TimeoutError: Waiting for element to be located By(css selector, ul.your-sections)
// Wait timed out after 8153ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 2) Sections
// As PD Admin
//   Visiting Morty's Math 101
//     "before all" hook for "should display the section details":
// TimeoutError: Waiting for element to be located By(css selector, form[data-test="section-info-form"])
// Wait timed out after 8161ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 3) Sections
// As PD Admin
//   Create section
//     Clicking link from section-info
//       should display new section form:
// TimeoutError: Waiting for URL to be "http://localhost:8082/#/sections/new"
// Wait timed out after 5046ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 4) Sections
// As Teacher
//   Visiting sections page
//     "before all" hook for "should display list of user's own sections":
// TimeoutError: Waiting for element to be located By(css selector, ul.your-sections)
// Wait timed out after 8165ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 5) Sections
// As Admin
//   Visiting sections page
//     "before all" hook for "should display list of user's own sections":
// TimeoutError: Waiting for element to be located By(css selector, ul.your-sections)
// Wait timed out after 8163ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 6) Sections
// As Admin
//   Visiting Drexel University
//     "before all" hook for "should display the section details":
// TimeoutError: Waiting for element to be located By(css selector, form[data-test="section-info-form"])
// Wait timed out after 8169ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 7) Sections
// As Admin
//   Create section
//     Clicking link from section-info
//       should display new section form:
// TimeoutError: Waiting for URL to be "http://localhost:8082/#/sections/new"
// Wait timed out after 5039ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 8) Sections
// As Student
//   Visiting sections page
//     "before all" hook for "should display list of user's own sections":
// TimeoutError: Waiting for element to be located By(css selector, ul.your-sections)
// Wait timed out after 8180ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at runMicrotasks (<anonymous>)
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 9) Sections
// As Student
//   Visiting Summer's Algebra 2 1st Period
//     "before all" hook for "should display the section details":
// TimeoutError: Waiting for element to be located By(css selector, form[data-test="section-info-form"])
// Wait timed out after 8167ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at runMicrotasks (<anonymous>)
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 10) Sections
// As Student
//   Create section
//     Navigating directly
//       should redirect to sections/home:

// AssertionError: expected 'http://localhost:8082/#/sections' to deeply equal 'http://localhost:8082/#/sections/home'
// + expected - actual

// -http://localhost:8082/#/sections
// +http://localhost:8082/#/sections/home

// at Context.<anonymous> (test/selenium/sections.js:178:64)
// at runMicrotasks (<anonymous>)
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 11) Sections
// As Teacher acting as Student
//   Visiting sections page
//     "before all" hook for "should display list of user's own sections":
// TimeoutError: Waiting for element to be located By(css selector, ul.your-sections)
// Wait timed out after 8164ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at runMicrotasks (<anonymous>)
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 12) Sections
// As Teacher acting as Student
//   Visiting Summer's Algebra 2 1st Period
//     "before all" hook for "should display the section details":
// TimeoutError: Waiting for element to be located By(css selector, form[data-test="section-info-form"])
// Wait timed out after 8185ms
// at /Users/timothyleonard/Documents/21PSTEM/mt/encompass/node_modules/selenium-webdriver/lib/webdriver.js:894:17
// at runMicrotasks (<anonymous>)
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// 13) Sections
// As Teacher acting as Student
//   Create section
//     Navigating directly
//       should redirect to sections/home:

// AssertionError: expected 'http://localhost:8082/#/sections' to deeply equal 'http://localhost:8082/#/sections/home'
// + expected - actual

// -http://localhost:8082/#/sections
// +http://localhost:8082/#/sections/home

// at Context.<anonymous> (test/selenium/sections.js:178:64)
// at runMicrotasks (<anonymous>)
// at processTicksAndRejections (internal/process/task_queues.js:97:5)

// REQUIRE MODULES
const {Builder, until} = require('selenium-webdriver');
const expect = require('chai').expect;

// REQUIRE FILES
const helpers = require('./helpers');
const dbSetup = require('../data/restore');
const css = require('./selectors');
const host = helpers.host;
const testUsers = require('./fixtures/users');


describe('Sections', async function () {
  function runTests(users) {
    function _runTests(user) {
      const { accountType, actingRole, testDescriptionTitle, sections, organization, username } = user;
      const isStudent = accountType === 'S' || actingRole === 'student';

      const sectionDetails = sections.testExample;
      const sectionLink = `a[href='#/sections/${sectionDetails._id}`;


      describe(`As ${testDescriptionTitle}`, function() {
        this.timeout(helpers.timeoutTestMsStr);
        let driver = null;

        before(async function() {
          driver = new Builder()
            .forBrowser('chrome')
            .build();
            await dbSetup.prepTestDb();
            return helpers.login(driver, host, user);
          });

        after(function() {
          return driver.quit();
        });

        describe('Visiting sections page', function () {
          before(async function () {
            await helpers.findAndClickElement(driver, css.topBar.sections);
            await helpers.waitForSelector(driver, 'ul.your-sections');
          });
          it('should display list of user\'s own sections', async function () {
            expect(await helpers.getWebElements(driver, 'ul.your-sections a')).to.have.lengthOf(sections.own.count);
          });
          if (!isStudent) {
            it('should display list of sections the user belongs to', async function () {
              expect(await helpers.getWebElements(driver, 'ul.collab-sections a')).to.have.lengthOf(sections.collab.count);
            });
            if (accountType === 'A') {
              it('should display list of all sections', async function () {
                expect(await helpers.getWebElements(driver, 'ul.all-sections a')).to.have.lengthOf(sections.all.count);
              });
            } else if (accountType === 'P') {
              it('should display list sections for user\'s org', async function () {
                expect(await helpers.getWebElements(driver, 'ul.org-sections a')).to.have.lengthOf(sections.org.count);
              });
            }
          }
        });

        describe(`Visiting ${sectionDetails.name}`, function () {
          before(async function () {
            await helpers.findAndClickElement(driver, sectionLink);
            await helpers.waitForSelector(driver, css.sectionInfo.container);
          });
          it('should display the section details', async function () {
            await helpers.waitForSelector(driver, css.sectionInfo.details.name);
            expect(await helpers.findAndGetText(driver, css.sectionInfo.details.name)).to.eql(sectionDetails.name);
          });
          if (!isStudent) {
            describe('adding a student to class', function() {
              before(async function() {
                await helpers.waitForSelector(driver, css.sectionInfo.editButtons.students);
              });

              let hash = {
                ssmith: ['teachertaylor','5b914a802ecaf7c30dd47493', 'teachertaylor'],
                rick: ['pdadmin','5b7321ee59a672806ec903d5', 'pdadmin'],
                pdadmin: ['drex','5b1e7bf9a5d2157ef4c911a6', 'drex']
              };
              let usernameLinkSelector = `a[href="#/users/${hash[username][2]}"]`;
              it('clicking on edit students should bring up menus', async function() {
                expect(await helpers.isElementVisible(driver, css.sectionInfo.editButtons.students)).to.eql(true);

                await helpers.findAndClickElement(driver, css.sectionInfo.editButtons.students);

                await driver.sleep(500);
                let addUserInput = 'input#select-add-student-selectized';
                await helpers.waitForSelector(driver, addUserInput);

                await helpers.selectSingleSelectizeItem(driver, addUserInput , hash[username][0], hash[username][1], {willInputClearOnSelect: true, toastText: 'Student Added'});

                await helpers.waitForSelector(driver, usernameLinkSelector);

                expect(await helpers.isElementVisible(driver, usernameLinkSelector));
              });

              it('new student should persist after page refresh', async function() {
                await driver.get(`${host}/#/assignments/home`);
                await driver.sleep(2000);
                await driver.get(`${host}/#/sections/${sectionDetails._id}`);
                await driver.sleep(2000);
                await helpers.waitForSelector(driver, usernameLinkSelector);
                expect(await helpers.isElementVisible(driver, usernameLinkSelector));
              });
            });
          }

        });

        describe('Create section', function () {
          const url = `${host}/#/sections/new`;
          const verifyForm = function () {
            const inputs = css.newSection.inputs;

            //testing for inputs
            for (let input of Object.keys(inputs)) {
              if (accountType === 'T' && input === 'teacher') {
                // eslint-disable-next-line no-loop-func
                it(`teacher field should be fixed as current user`, async function() {
                  expect(await helpers.findAndGetText(driver, css.newSection.fixedInputs.teacher)).to.eql(username);
                });
              } else if (input === 'organization') {
                if (accountType === 'A') {
                  // eslint-disable-next-line no-loop-func
                  it('should prompt user to select a teacher', async function() {
                    expect(await helpers.isTextInDom(driver, 'Please select a teacher first.')).to.be.true;
                  });
                } else {
                  it(`organization field should be fixed as user's org`, async function() {
                    expect(await helpers.findAndGetText(css.newSection.fixedInputs.organization)).to.eql(organization);
                  });
                }

              } else {
                // eslint-disable-next-line no-loop-func
                it(`${input} field should be visible`, async function() {
                  expect(await helpers.isElementVisible(driver, inputs[input])).to.be.true;
                });
              }

            }
          };
          describe('Clicking link from section-info', function() {
            let sel = css.sectionInfo.newSectionButton;
            if (isStudent) {
              it(`link should not be visible`, async function() {
                expect(await helpers.isElementVisible(driver, sel)).to.be.false;
              });
            } else {
              it(`should display new section form`, async function() {
                try {
                  await helpers.findAndClickElement(driver, sel);
                  await driver.wait(until.urlIs(`${host}/#/sections/new`), 5000);
                  await helpers.waitForSelector(driver, css.newSection.form);

                }catch(err) {
                  throw(err);
                }
              });

            }
          });

          describe('Navigating directly', function() {
            before(async function() {
              try {
                await driver.get(url);
              }catch(err) {
                throw(err);
              }
            });
            if (isStudent) {
              it(`should redirect to sections/home`, async function() {
                await helpers.waitForSelector(driver, css.sectionHome);
                expect(await helpers.getCurrentUrl(driver)).to.eql(`${host}/#/sections/home`);
              });
            } else {
              it(`should display new section form`, async function() {
                try {
                  await driver.wait(until.urlIs(url));
                  expect(await helpers.isElementVisible(driver, css.newSection.form)).to.be.true;
                }catch(err) {
                  throw(err);
                }
              });
            }
          });
          if (!isStudent) {
            describe('Verify form inputs', async function () {
              await verifyForm();

            });

            describe('Creating section', function() {
              const inputs = css.newSection.inputs;
              const details = sections.newSection;
              const nameError = 'Name can\'t be blank';

              const submitSection = async function(details) {
                for (let detail of Object.keys(details)) {
                  try {
                    // eslint-disable-next-line no-await-in-loop
                    await helpers.findInputAndType(driver, inputs[detail], details[detail]);
                  }catch(err) {
                    throw(err);
                  }
                }
                await helpers.findAndClickElement(driver, css.newSection.create);
              };

              describe('submitting empty form', function() {
                it('should display error message(s)', async function() {
                  await helpers.findAndClickElement(driver, css.newSection.create);
                  await helpers.waitForSelector(driver, css.general.errorMessage);
                  expect(await helpers.getCurrentUrl(driver)).to.match(/sections\/new/);
                  expect(await helpers.isTextInDom(driver, nameError)).to.be.true;
                });
              });

              describe('submitting valid form', function() {
                it('should redirect to section-info page after creating', async function () {
                  await submitSection(details);
                  await helpers.waitForUrlMatch(driver, /sections\/[a-z0-9]{24}/, 10000);

                  let teacher;
                  if (accountType === 'T') {
                    teacher = username;
                  } else {
                    teacher = details.teacher;
                  }
                  expect(await helpers.isTextInDom(driver, teacher)).to.be.true;
                });
              });


          });
          }
        });
      });
    }
    return Promise.all(Object.keys(users).map(user => _runTests(users[user])));

  }
  await runTests(testUsers);
});




    // DROPDOWN MENU TO SELECT ORGANIZATION
    // describe('should display organization options', function() {
    //   it('should display organization dropdown menu', async function() {
    //     expect(await helpers.isElementVisible(driver, 'section.org.options select')).to.be.true;
    //   });
    //   it('organization dropdown menu should have at least three option', async function() {
    //     expect(await helpers.getWebElements(driver, 'section.org.options select>option')).to.have.lengthOf.at.least(3);
    //   });
    //   it('pick one organization from dropdwon menu', async function(){
    //     expect(await helpers.findAndClickElement(driver, 'section.org.options select > option:first-child'));
    //   });
