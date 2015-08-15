(function () {

    var testModules = [
        "js/tests/test_models.js",
    ];

    // Resolve all testModules and then start the Test Runner.
    require(testModules, function(){
        QUnit.load();
        QUnit.start();
    });
}());