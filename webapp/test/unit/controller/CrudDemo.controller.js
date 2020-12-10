/*global QUnit*/

sap.ui.define([
	"com/syonchev/crud_demo/controller/CrudDemo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CrudDemo Controller");

	QUnit.test("I should test the CrudDemo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});