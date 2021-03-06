"use strict";
var router_1 = require('@angular/router');
var auth_guard_service_1 = require('./services/auth-guard.service');
var about_component_1 = require('./about.component');
var documentation_component_1 = require('./documentation.component');
var home_component_1 = require('./home.component');
var content_component_1 = require('./content.component');
var employee_component_1 = require('./employee.component');
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: 'Login' } },
    { path: 'signup', component: signup_component_1.SignupComponent, data: { title: 'Signup' } },
    { path: 'home', component: home_component_1.HomeComponent, data: { title: 'Home' } },
    { path: 'content', component: content_component_1.ContentComponent, data: { title: 'Content' } },
    { path: 'employee', component: employee_component_1.EmployeeComponent, data: { title: 'Employees' }, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: 'About' } },
    { path: 'documentation', component: documentation_component_1.DocumentationComponent, data: { title: 'Documentation' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [about_component_1.AboutComponent, documentation_component_1.DocumentationComponent, login_component_1.LoginComponent, signup_component_1.SignupComponent, home_component_1.HomeComponent, content_component_1.ContentComponent, employee_component_1.EmployeeComponent];
//# sourceMappingURL=app.routing.js.map