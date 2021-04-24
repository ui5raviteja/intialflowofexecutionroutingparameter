sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.practice.IntialFlowHookMethods.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.practice.IntialFlowHookMethods.view.View2
		 */
		onInit: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachMatched(this._onRouteMatched, this);

		},

		_onRouteMatched: function (oEvent) {

			this.getView().byId("textFromView1").setText(oEvent.getParameter("arguments").input1);
			this.getView().byId("textFromView2").setText(oEvent.getParameter("arguments").input2);
			this.getView().byId("textFromView3").setText(oEvent.getParameter("arguments").input3);

			console.log(oEvent.getParameter("arguments").input2);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.practice.IntialFlowHookMethods.view.View2
		 */
		// 		onBeforeRendering: function () {

		// 		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.practice.IntialFlowHookMethods.view.View2
		 */
		// 		onAfterRendering: function () {

		// 		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.practice.IntialFlowHookMethods.view.View2
		 */
		// 		onExit: function () {

		// 		},
		moveToView1: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View1");
		}

	});

});