$(document).ready(function()
{
    //Add a task to the list
    $('#addTask').click(function()
{
    //alert("Button clicked!");
    var task = $('#taskInput').val();
    if(task)
    {
        //append list item to the list
        $('#taskList').append('<li><span class="taskText">'+task+'</span><span class="editButton">Edit</span><span class="removeButton">Remove</span></li>');
        $('#taskInput').val('');
    }
})

//highlight input field on focus
$('#taskInput').focus(function()
{
    $(this).addClass('highlight')
})

//remove highlight input field on focus
$('#taskInput').blur(function()
{
    $(this).removeClass('highlight');
})

//mark task as completed
$('#taskList').on('click', '.taskText', function()
{
    $(this).toggleClass('completed');
})

//remove task from the list
$('#taskList').on('click', '.removeButton', function()
{
    $(this).parent().remove();
})

//edit task text
$('#taskList').on('click', '.editButton', function()
{
    var $taskText = $(this).siblings('.taskText');
    var currentText = $taskText.text();
    var newText = prompt('Edit Task:', currentText);
    if(newText)
    {
        $taskText.text(newText);
    }
})

//event for mouse enter
$('#taskList').on('mouseenter', '.taskText', function()
{
    $(this).css('cursor','pointer');
})
})