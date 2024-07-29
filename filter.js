
function cbclick(ev)
{
	ev.srcElement.checked = true;
	var cell = ev.srcElement.parentElement.cellIndex;
	var row = ev.srcElement.parentElement.parentElement.rowIndex;
	console.log(cell + "x" + row);
	var tbl = document.getElementById("tbl");
	var nrows = tbl.rows.length;
	for (var i = 1; i < row; i++)
	{
		tbl.rows[i].cells[cell].children[0].checked = true;
	}
	for (var i = row+1; i < nrows; i++)
	{
		tbl.rows[i].cells[cell].children[0].checked = false;
	}

}

function selectall()
{
	for (cb of document.getElementsByTagName('input')) cb.checked= true
}
