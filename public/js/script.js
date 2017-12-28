$(function(){
  var btn = $('#btn');
  var inpbox = $('#inpbox');
  var list = $('#list');

  function refresh(notes){
      inpbox.val("");
      let listdata = "";
      notes.forEach(function(note){
        listdata += "<li>" + note.task + "</li>";
      });
      list.html(listdata);
  }

  btn.click(function(){
    $.post("/notes",{task: inpbox.val(), done: false}, refresh);
  })

  $.get('/notes', refresh);
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
              title: "Jboss Community Notes",
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
            }
          ];

  }
]);