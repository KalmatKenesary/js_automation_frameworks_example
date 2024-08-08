describe('My Test Suite', function() {
    it('should pass this test', function() {
      expect(true).to.be.true;
    });
  
    it('should also pass this test', function() {
      expect(1 + 1).to.equal(2);
    });
  });

describe('helloWorld()', function(){
    it('should return "Hello world"', function(){
        expect( helloWorld() ).to.be.equal( 'Hello world' );
    });
});

describe('greet()', function(){
    beforeEach(function(){
        document.querySelector('body').innerHTML += '<h1 class="greeting"></h1>';
    });
    afterEach(function(){
        const elem = document.querySelector('.greeting');
        elem.parentNode.removeChild(elem);
    });
    it('should add "Hello world" to the page', function(){

        greet();

        const greeting = document.querySelector('.greeting');

        expect( greeting.innerHTML ).to.be.equal( 'Hello world' );
    });
});