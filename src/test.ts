// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import {getTestBed} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = (import.meta as any).webpackContext('./', {
  recursive: true,
  regExp: /\.spec\.ts$/
});

// And load the modules.
context.keys().map(context);

//main
123

//testNo1
No1
No2
<<<<<<< HEAD
No2--No3--123
No3
=======
No3-NO3

//testNo21
<<<<<<< HEAD
222 main222 
=======
222 223 NO21--111
>>>>>>> testNo21
>>>>>>> remotes/origin/testNo1
