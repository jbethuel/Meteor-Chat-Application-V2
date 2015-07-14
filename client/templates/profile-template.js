Template.appProfile.helpers({
	profile: function (){
		return Profile.find({}, {sort: {createdAt: -1}, limit: 10})
	}
});

Template.appProfile.events({

	"click .btnDelete": function (event) {
		Profile.remove(this._id);
		return	false;
	},

	"keyup .txtWT": function (event) {
			if(event.keyCode == 13){
				Profile.insert({
				studentid: $(".txtID").val(),
				course: $(".txtCourse").val(),
				firstname: $(".txtFN").val(),
				birthday: $(".txtDOB").val(),
				civilstatus: $(".txtCS").val(),
				sex: $(".txtSex").val(),
				bloodtype: $(".txtBT").val(),
				height: $(".txtHT").val(),
				weight: $(".txtWT").val(),
				createdAt: new Date()
			});
				$(".txtText").val("");
				$(".txtText").focus();
		}
		return false;
	}
});