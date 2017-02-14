$(document).ready(function(){
    $('#clickMe').on({
                mouseenter: function(){
                    $(this).css("background-color","lightgray");
                },
                mouseleave: function() {
                    $(this).css("background-color","lightblue");           //Sequence using .on()
                },
                click: function() {
                    $(this).css("background-color","yellow");
                }
            });
    
    $('#b1').click(function(){
        var j = $('#clickMe');
        j.animate({bottom: '300px'}, "slow");
        j.animate({fontSize: '5em'}, "slow");
    });
    
    $('#b2').click(function(){
        $('#j1').hide("slow", function(){
           $('#j1').show("slow"); 
        });
    });
    
    $('#b3').click(function(){
        $('#p1').css("color","green").slideDown("slow").slideUp("slow");
    });
    
    $('#panelHead').click(function(){
        $('#panelBody').slideToggle("slow");
    });
    
    
    $('#btnSubmit').click(function(){
        alert("Your Name is : "+$('#name').val()+" Your Query is: "+$('#query').val());
    });
    
});