/*global QUnit*/

sap.ui.define([
	"com/practice/IntialFlowHookMethods/controller/BaseApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BaseApp Controller");

	QUnit.test("I should test the BaseApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});