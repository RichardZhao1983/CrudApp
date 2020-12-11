sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/base/Event",
	"sap/ui/commons/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Event, MessageBox, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.syonchev.crud_demo.controller.CrudDemo", {
		onInit: function () {},
		oDataCall: function (oEvent) {
			var myModel = this.getView().getModel();
			myModel.refresh();
			if ("Create" == oEvent.oSource.mProperties.text) {
				var obj = {
					Id: this.getView().byId("uniqueid").getValue(),
					Name: this.getView().byId("nameid").getValue(),
					Email: this.getView().byId("emailid").getValue(),
					Mobile: this.getView().byId("mobid").getValue()
				};
				myModel.create("/UserdataSet", obj, {
					success: function (oData, oResponse) {
						var responseObj = JSON.parse(oResponse.headers["sap-message"]);
						MessageBox.alert(responseObj.message);
					},
					error: function (err, oResponse) {
						var errRes = JSON.parse(err.responseText);
						MessageBox.alert(errRes.error.message.value);
					}
				});
			} else if ('Update' == oEvent.oSource.mProperties.text) {
				var updatingObj = {
					Id: this.getView().byId("uniqueid").getValue(),
					Name: this.getView().byId("nameid").getValue(),
					Email: this.getView().byId("emailid").getValue(),
					Mobile: this.getView().byId("mobid").getValue()
				};
				myModel.update("/UserdataSet(Id='" + updatingObj.Id + "')", updatingObj, {
					success: function (oData, oResponse) {
						var responseObj = JSON.parse(oResponse.headers["sap-message"]);
						MessageBox.alert(responseObj.message);
					},
					error: function (err, oResponse) {
						var errRes = JSON.parse(err.responseText);
						MessageBox.alert(errRes.error.message.value);
					}
				});
			} else if ('Delete' == oEvent.oSource.mProperties.text) {
				var delurl = "/UserdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";
				myModel.remove(delurl, {
					success: function (oData, oResponse) {
						var responseObj = JSON.parse(oResponse.headers["sap-message"]);
						MessageBox.alert(responseObj.message);
					},
					error: function (err, oResponse) {
						var errRes = JSON.parse(err.responseText);
						MessageBox.alert(errRes.error.message.value);
					}
				});
			}
		}
	});
});