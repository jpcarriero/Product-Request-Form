$(document).ready(function() {
      function write_row() {
          url = 'https://script.google.com/a/macros/segment.com/s/AKfycbxc9U5KMl_cZN_3YJ6W3-K7pyu0nfkt--8Kf_4_dCogicpiDJA/exec'
          nm = $('#usr').val();
          ctgy = $('#sel1').val();
          typ = $("input:radio[name='type-radio']:checked").val();
          dts = $('#request-details').val();
          mpct = $("input:radio[name='impact-radio']:checked").val();
          cmmts = $('#other').val();
          cmpny = $('#company').val();
          tm = $("input:radio[name='team-radio']:checked").val();
          dlsz = $('#deal-size').val();
          stg = $("input:radio[name='stage-radio']:checked").val();
          //row_to_write = [nm,ctgy,typ,dts,mpct,cmmts,cmpny,tm,dlsz,stg];
          $.get( url, {"Requester Name":nm,"Request Category":ctgy,"Request Type":typ,"Request Details":dts,"Impact on Deal":mpct,"Other Comments":cmmts,"Company":cmpny,"Deal Size":dlsz,"Deal Stage":stg})
          .done(function(){
            window.location.href = "https://docs.google.com/a/segment.com/spreadsheets/d/1HK1VShTuPlTeSCtlcj0vwwgbq6K49WcQBZ7kW4rKmAg/pubhtml"
          })
          .fail(function(jqXHR, textStatus, errorThrown){
            alert("submitting failed with "+jqXHR.responseText+" if this doesn't make sense to you screenshot this message and slack John Carriero")
          })
      }
      $( "form" ).submit(function( event ) {
          write_row()
        });
// Nixon Code Below

    // $.ajax({
    //     url: '/api/users',
    //     success: function(data) {
    //         data = data.map(function(request) {
    //             return request.name
    //         })
    //         var app = new App(data)
    //     },
    //     async: true
    // });

    // var App = function(data) {

    //     var scope = {
    //       data: data
    //     }

    //     /**
    //      *
    //      * Helper function for search
    //      *
    //      */

    //     var substringMatcher = function(strs) {
    //         return function findMatches(q, cb) {
    //             var matches, substringRegex;

    //             // an array that will be populated with substring matches
    //             matches = [];

    //             // regex used to determine if a string contains the substring `q`
    //             substrRegex = new RegExp(q, 'i');

    //             // iterate through the pool of strings and for any string that
    //             // contains the substring `q`, add it to the `matches` array
    //             $.each(strs, function(i, str) {
    //                 if (substrRegex.test(str)) {
    //                     matches.push(str);
    //                 }
    //             });

    //             cb(matches);
    //         };
    //     };

    //     /* User Typeahead */
        
    //     $('#usr').typeahead({
    //         hint: true,
    //         highlight: true,
    //         minLength: 1
    //     }, {
    //         name: 'reps',
    //         source: substringMatcher(scope.data)
    //     });

    //     /* Request details typeahead */

    //     $('#request-details').typeahead({
    //         hint: true,
    //         highlight: true,
    //         minLength: 1
    //     }, {
    //         name: 'reps',
    //         source: substringMatcher(scope.data)
    //     });

    //     /* Request Type Dropdown Listener */

    //     $('#sel1').change(function() {
    //         scope.selectedText = $(this).find("option:selected").text();
    //     });

    //     $( "form" ).submit(function( event ) {
    //       event.preventDefault();
    //       var formData = $(this).serializeArray();
    //       $(this).each(function(){ 
    //           this.reset();
    //       });
    //       var parsedFormData = {};
    //       formData.forEach(function(data){
    //         console.log(data)
    //         parsedFormData[data.name] = data.value;
    //       })

    //       var payload = {
    //         name: parsedFormData.user,
    //         requestType: parsedFormData.category,
    //         details: parsedFormData.request,
    //         comments: parsedFormData.comments,
    //         dealLikelihood: parseInt(parsedFormData.closingradio, 10),
    //         company: parsedFormData.company,
    //         team: parsedFormData["team-radio"],
    //         potentialDealSize: parsedFormData["potential-deal-size"]
    //       }
    //       console.log(payload)
    //       $.ajax({
    //         url: '/api/add-request',
    //         method: 'POST',
    //         data: JSON.stringify(payload),
    //         success: function(result){
    //           console.log(result)
    //         }
    //       })

    //     });

    //     //console.log($('#sel1').find('option:selected').text());

    // }

})
