sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.practice.IntialFlowHookMethods.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.practice.IntialFlowHookMethods.view.View1
		 */
		onInit: function () {
			
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.practice.IntialFlowHookMethods.view.View1
		 */
		onBeforeRendering: function () {
		
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.practice.IntialFlowHookMethods.view.View1
		 */
		onAfterRendering: function () {
		
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.practice.IntialFlowHookMethods.view.View1
		 */
		onExit: function () {
		
		},
		onMove: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2", {
				input1: this.getView().byId("input1").getValue(),
				input2: this.getView().byId("input2").getValue(),
				input3: this.getView().byId("input3").getValue(),
			});

			this.getView().byId("input1").setValue("");
			this.getView().byId("input2").setValue("");
			this.getView().byId("input3").setValue("");

		}

	});

});