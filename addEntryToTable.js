$(document).ready(function() {
    
    $("#enviar").click(function addEntryToTable() {
        var titulo = $('#titulo').val();
        var descripcion = $('#descripcion').val();
        var disponibilidad = $('#disponibilidad').val();
        var nivel = $('#nivel').val();
        var autor = $('#autor').val();

        var table = $('table')
        var linea = '<tr><td>' + titulo + '</td><td>' + descripcion + '</td><td>' + disponibilidad + '</td><td>' + nivel + '</td><td>' + autor + '</td></tr>';
        table.append(linea);
    })

});