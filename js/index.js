$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $('#letterSize').on('change textInput input', () => changeLetterSize());
    $('#btnConvert').on('click', () => convert());
    $('#btnExport').on('click', () => exportToImg());

    $('#chkWrap').on('change', () => wrap());
});

function wrap() {

    if ($('#chkWrap').is(':checked')){
        $('#outputArea').css('white-space', 'nowrap')
    } else {
        $('#outputArea').css('white-space', '')
    }

}

function convert(){

    let alphabet = $('#alphabetSelect').val();
    let inputText = $('#idInputText').val().toUpperCase();
    console.log(inputText);


    $outputArea  = $('#outputArea');
    $outputArea.empty();

    $('#rowResult').css('display', 'flex');

    for (let i = 0; i < inputText.length; i++) {
        let letter = inputText[i];
        if (/^[a-zA-Z]/.test(letter)){
            $outputArea.append(`<img src="img/${alphabet}/hi_res/${letter}.png" class="letter">`);
        } else if (letter == '\n'){
            $outputArea.append('<br/>');

        } else {
            $outputArea.append('<span class="letter space"> </span>');
        }
    }
}
function exportToImg(){

    let $outputArea = $("#outputArea");
    // $outputArea.css('overflow', 'visible');
    // $('.html2canvas-container').width($('#outputArea').width());

    $outputArea.css('overflow', 'visible');
    html2canvas(document.querySelector("#outputArea"), {width: $('#outputArea')[0].scrollWidth}).then(canvas => {
        canvas.toBlob(function(blob) {
            saveAs(blob, "text.png");
            $outputArea.css('overflow', 'auto');
        });

    });

    // html2canvas($("#outputArea"), {
    //     onrendered: function(canvas) {
    //         let theCanvas = canvas;
    //
    //
    //         canvas.toBlob(function(blob) {
    //             saveAs(blob, "text.png");
    //         });
    //     }
    // });


}




function changeLetterSize() {
    let val = $('#letterSize').val();

    console.log(val);

    $('.letter').css('width', val);

    return true;

}

