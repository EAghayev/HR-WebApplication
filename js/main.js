$(document).ready(function(){



$(".mynav-toggler-btn").click(function(e){
    console.log(e.target)
    if($(".bell-toggle").is(e.target) || $(".icon-bell").is(e.target)){
        $(".equalizer-menu").css("display","none")
    }
    else{
        $(".bell-menu").css("display","none");
    }
$(this).next().toggle()
$(this).next().css("animation-name","mynav-dropdown")
})

$(".sidebar-account-toggler").click(function(e){
    $(this).next().toggle();
    $(this).next().css("animation-name","sidebar-account")
})
$(window).click(function(e){
  
       if(!$(".mynav-toggler-btn").is(e.target) && $(".mynav-toggler-btn").has(e.target).length===0
            && !$(".bell-menu").is(e.target) && $(".bell-menu").has(e.target).length===0 
            && !$(".equalizer-menu").is(e.target) && $(".equalizer-menu").has(e.target).length===0){
           $(".bell-menu").hide();
           $(".equalizer-menu").hide();
       }
       if(!$(".sidebar-account-toggler").is(e.target) && $(".sidebar-account-toggler").has(e.target).length===0){
           $(".account-dropdown-menu").hide()
           console.log("dsfdssdfd")
       }
       if($(".modal").length){
           if($(".modal").is(e.target)){
            $(".modal").css("display","none")
            $(".modal-overlay").css("display","none")
            $("body").css("overflow","auto")
           }
        }
       

    })

    $(".menu-bar li").click(function(){
        $(".menu-bar li").removeClass("active")
        $(this).addClass("active")
    })
    // $(".sidebar-dropdown-toggle").click(function(){
        
    // })
    $(".sidebar-dropdown-toggle").click(function(){
      
        if( $(this).find(".sidemenu-dropdown").hasClass("dropdown-animate-icon")){
            $(this).find(".sidemenu-dropdown").addClass("dropdown-icon-animate")
            $(this).find(".sidemenu-dropdown").removeClass("dropdown-animate-icon")
            $(this).next().slideUp("slow")
            return false;
      
        }
        else
        if( $(this).find(".sidemenu-dropdown").hasClass("dropdown-icon-animate")){
            $(this).find(".sidemenu-dropdown").addClass("dropdown-animate-icon")
            $(document).find(".sidemenu-dropdown").removeClass("dropdown-icon-animate")
            $(".sidebar-dropdown-menu").slideUp("slow");
            $(this).next().slideDown("slow")
            return false;  
        }
        else{
            $(document).find(".sidemenu-dropdown").removeClass("dropdown-animate-icon")
            $(this).find(".sidemenu-dropdown").addClass("dropdown-animate-icon")
             $(".sidebar-dropdown-menu").slideUp("slow");
             $(this).next().slideToggle("slow")
            return false;
        }
    
        return false;
    })
    
    $(".navbar-toggle").click(function(){
        if($("#sidebar").css("left")=="-250px"){
            $("#sidebar").css("left","5px")
        }
        else {
            $("#sidebar").css("left","-250px")
        }
    })
    $(".sidebar-arrow").click(function(){
        
        if($(window).width()>1200){
            console.log($("#sidebar").css("left"))
            if($("#sidebar").css("left")=="-250px"){
                $("#main-content").css("width","calc(100% - 250px)")
                $("#sidebar").css("left","5px")
                $(".sidebar-arrow").addClass("fa-arrow-left")
                $(".sidebar-arrow").removeClass("fa-arrow-right")
            }
            else {
                $("#main-content").css("width","100%")  
                $("#sidebar").css("left","-250px")
                $(".sidebar-arrow").addClass("fa-arrow-right")
                $(".sidebar-arrow").removeClass("fa-arrow-left")
            }
        }
    })
    $(window).resize(function(){
        console.log($(this).width())

        if($(this).width()>1200){
            $("#sidebar").css("left","5px")
            $("#main-content").css("width","calc(100% - 250px)")
        }
        else{
            $("#sidebar").css("left","-250px")
            $("#main-content").css("width","100%")
        }
    })
   
    //==================================================================
    //To-Do-List
    //================================================================
    $("input").click(function(){
        var state=$(this).next().find("label").text();
        if($(this).parent().find("input").prop("checked")==true){
            $(this).next().find("label").css("text-decoration","line-through")
        }
        else{
            $(this).next().find("label").css("text-decoration","none")
        }
    })

     //===================================================================
    //Calendar
    //===================================================================
    if($("#calendar").length){

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2018-07-12',
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-07-01',
                className: 'bg-info',
                
            },
            {
                title: 'Long Event',
                start: '2018-07-07',
                end: '2018-07-10',
                className: 'bg-danger'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-08-09T16:00:00',
                className: 'bg-dark'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-06-16T16:00:00',
                className: 'bg-success'
            },
            {
                title: 'Conference',
                start: '2018-08-11',
                end: '2018-08-14',
                className: 'bg-primary'
            },
            {
                title: 'Meeting',
                start: '2018-08-12T10:30:00',
                end: '2018-08-12 T12:30:00',
                className: 'bg-warning'
            },
            {
                title: 'Lunch',
                start: '2018-08-12T12:00:00',
                className: 'bg-dark'
            },
            {
                title: 'Meeting',
                start: '2018-08-12T14:30:00',
                className: 'bg-secondary'
            },
            {
                title: 'Happy Hour',
                start: '2018-07-12T17:30:00',
                className: 'bg-dark'
            },
            {
                title: 'Dinner',
                start: '2018-06-12T20:00:00',
                className: 'bg-warning'
            },
            {
                title: 'Birthday Party',
                start: '2018-08-13T07:00:00',
                className: 'bg-success'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-08-28',
                className: 'bg-primary'
            }
        ]
    })
}
    
    //===================================================================
    //DataTables
    //===================================================================
      if($("#data-table").length){
        if($('.table')){
            $('.table').DataTable();
            $("#DataTables_Table_0_wrapper").find("select").removeClass("custom-select");
        }
      }
       
       

        //===================================
        //progress-bar
        //====================================
        if( $("#circle-first").length){
            $("#circle-first").circleProgress({
                progress:0.75,
                thickness:8,    
                percentage: true,
                lineCap: 'round',
                size: 120,
                fill: {
                  gradient: ["rgb(73, 169, 229)"]
                }
              }).on('circle-animation-progress', function(event, progress, stepValue) {
                var myval=Math.round(stepValue*100);
              $(this).find('strong').text(myval+"%");
              })
    
            $("#circle-second").circleProgress({
                progress:0.75,
                thickness:8,    
                percentage: true,
                lineCap: 'round',
                size: 120,
                fill: {
                gradient: ["rgb(184, 128, 225)"]
                }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                var myval=Math.round(stepValue*100);
            $(this).find('strong').text(myval+"%");
            })
                }

//=============================================================================
//Add event 
//=============================================================================
$("#add-new-event").click(function(){
    $(".modal").css("display","block")
    $(".modal-overlay").css("display","block")
    $("body").css("overflow","hidden")
})

$(".close-modal").click(function(e){
    e.preventDefault()
    $(".modal").css("display","none")
    $(".modal-overlay").css("display","none")
    $("body").css("overflow","auto")
})

//=============================================================================
//Add employee 
//=============================================================================
$("#add-new-employee").click(function(){
    $(".modal").css("display","block")
    $(".modal-overlay").css("display","block")
    $("body").css("overflow","hidden")
})
$(".close-modal").click(function(e){
    e.preventDefault()
    $(".modal").css("display","none")
    $(".modal-overlay").css("display","none")
    $("body").css("overflow","auto")
})


})

