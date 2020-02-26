# Troubleshooting
good tutorial: http://www.thinkcode.se/blog/2018/02/07/getting-started-with-cucumber-for-javascript

cucumber-js steps api https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md

cucumber-js exits with status 1 if there are any undefined / pending / failed / ambiguous steps. It exits with status 0 if all steps pass.
In these cases you'll get verbose output `npm ERR! code ELIFECYCLE...` 