// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  INDEX_URL: "http://127.0.0.1:8000",
  DEPARTMENTS_URL: "http://127.0.0.1:8000/departments/",
  EMPLOYEES_URL: "http://127.0.0.1:8000/employees/",
  PROFILE_PICTURE_URL: "http://127.0.0.1:8000/save_profile_photo",
  MEDIA_URL: "http://127.0.0.1:8000/media/",
  DEPARTMENT_URL: "http://127.0.0.1:8000/departments/department-page/",
  EMPLOYEE_URL: "http://127.0.0.1:8000/departments/employee-page/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
