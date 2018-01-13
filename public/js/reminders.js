$(function(){
  var btn = $('#btn-reminder');
  var inpbox = $('#contentContainer').find('input[name="reminderMsg"]');
  var remDate = $('#contentContainer').find('input[name="reminderDate"]');
  var list = $('#list');

  function refresh(reminders){
      inpbox.val("");
	  remDate.val("");
      let listdata = "";
	  reminders.sort(function(a,b) {return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);} );
      reminders.forEach(function(reminder){
        listdata += "<td width='30%' cellspacing='20'>" + reminder.task + "<br><br>" + reminder.date.slice(0, 10) + "</td>";
      });
      list.html(listdata);
	  responsiveVoice.speak("Hello Your earliest reminder is " + list.children("td:first").html().slice(0, -18));
  }

  btn.click(function(){
    $.post("/reminders",{task: inpbox.val(), date: remDate.val(), done: false}, refresh);
  })
  $.get('/reminders', refresh);
})



angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
  function ($scope) {
    $scope.navigations = [
            {
              title: "View Notes",
              iconClass: "fa fa-sticky-note-o",
              uiSref: "ViewNotes",
              uiSrefOptions: { someKey: 'SomeValue' }
            },
            {
              title: "Share",
              iconClass : "fa fa-share-alt  ",
              uiSref: "dolor",
              children: [
              {
                title: "Slack"

              },
              {
                title: "Gitter"
              }
              ]
            },
            {
              title: "JBoss Community Notes",
              iconClass : "fa fa-space-shuttle",
              uiSref: "ipsum",
              children: [
              {
                title: "Google Code-In "

              },
              {
                title: "Google Summer Of Code"
              }
              ]
            },
            {
              title: "Contact Us",
              iconClass : "fa fa-phone"
            },
            {
              title: "Reminders",
              iconClass: "fa fa-bell-o",
              uiSref: "Reminders"
            }
          ];

  }
]);