'use strict';

describe('Routing', function () {
  var $route;
  beforeEach(module('shortly'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
  }));

  it('Should have / route, template, and controller that point to signin', function () {
    expect($route.routes['/']).to.be.defined;
    expect($route.routes['/'].controller).to.equal('AuthController');
    expect($route.routes['/'].templateUrl).to.equal('app/auth/signin.html');
    expect($route.routes['/'].authenticate).to.be.true;
  });

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/signup']).to.be.defined;
    expect($route.routes['/signup'].controller).to.equal('AuthController');
    expect($route.routes['/signup'].templateUrl).to.equal('app/auth/signup.html');
    expect($route.routes['/signup'].authenticate).to.be.false;
  });

  it('Should have /signin route, template, and controller', function () {
    expect($route.routes['/signin']).to.be.defined;
    expect($route.routes['/signin'].controller).to.equal('AuthController');
    expect($route.routes['/signin'].templateUrl).to.equal('app/auth/signin.html');
    expect($route.routes['/signin'].authenticate).to.be.false;
  });

  it('Should have /links route, template, and controller', function () {
    expect($route.routes['/links']).to.be.defined;
    expect($route.routes['/links'].controller).to.equal('LinksController');
    expect($route.routes['/links'].templateUrl).to.equal('app/links/links.html');
    expect($route.routes['/links'].authenticate).to.be.true;
  });

  it('Should have /shorten route, template, and controller', function () {
    expect($route.routes['/shorten']).to.be.defined;
    expect($route.routes['/shorten'].controller).to.equal('ShortenController');
    expect($route.routes['/shorten'].templateUrl).to.equal('app/shorten/shorten.html');
    expect($route.routes['/shorten'].authenticate).to.be.true;
  });
});
