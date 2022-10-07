import React from 'react';

const ManageFarmers = () => {
    function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var fname=document.getElementById("fname_row"+no);
 var lname=document.getElementById("lname_row"+no);
 var acc=document.getElementById("acc_row"+no);
 var branch=document.getElementById("branch_row"+no);
	
 var fname_data=fname.innerHTML;
 var lname_data=lname.innerHTML;
 var acc_data=acc.innerHTML;
 var branch_data=branch.innerHTML;
	
 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 lname.innerHTML="<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 acc.innerHTML="<input type='text' id='acc_text"+no+"' value='"+acc_data+"'>";
 branch.innerHTML="<input type='text' id='branch_text"+no+"' value='"+branch_data+"'>";
}

function save_row(no)
{
 var fname_val=document.getElementById("fname_text"+no).value;
 var lname_val=document.getElementById("lname_text"+no).value;
 var acc_val=document.getElementById("acc_text"+no).value;
 var branch_val=document.getElementById("branch_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML=fname_val;
 document.getElementById("lname_row"+no).innerHTML=lname_val;
 document.getElementById("acc_row"+no).innerHTML=acc_val;
 document.getElementById("branch_row"+no).innerHTML=branch_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

    return (
            <div class="table-responsive" id="wrapper">

            <table class="table" id="data_table">
                <thead>
                    <tr>
                        <th class="font-weight-bold">First Name</th>
                        <th class="font-weight-bold">Last Name</th>
                        <th class="font-weight-bold">Acc Number</th>
                        <th class="font-weight-bold">Branch</th>
                        <th class="font-weight-bold">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="row1">
                        <td id="fname_row1">Agnes</td>
                        <td id="lname_row1">India</td>
                        <td id="acc_row1">946288820</td>
                        <td id="branch_row1">Nairobi</td>
                        <td>
                            <input type="button" id="edit_button1" value="Edit" class="edit"
                                onclick="edit_row('1')" />
                            <input type="button" id="save_button1" value="Save" class="save"
                                onclick="save_row('1')" />
                            <input type="button" value="Delete" class="delete"
                                onclick="delete_row('1')" />
                        </td>
                    </tr>
                    <tr id="row2">
                        <td id="fname_row2">Onesmus</td>
                        <td id="lname_row2">Antony</td>
                        <td id="acc_row2">946288820</td>
                        <td id="branch_row2">Nakuru</td>
                        <td>
                            <input type="button" id="edit_button1" value="Edit" class="edit"
                                onclick="edit_row('2')" />
                            <input type="button" id="save_button1" value="Save" class="save"
                                onclick="save_row('2')" />
                            <input type="button" value="Delete" class="delete"
                                onclick="delete_row('2')" />
                        </td>
                    </tr>
                    <tr id="row3">
                        <td id="fname_row3">Emmanuel</td>
                        <td id="lname_row3">Antony</td>
                        <td id="acc_row3">946288820</td>
                        <td id="branch_row3">Mombasa</td>
                        <td>
                            <input type="button" id="edit_button1" value="Edit" class="edit"
                                onclick="edit_row('3')" />
                            <input type="button" id="save_button1" value="Save" class="save"
                                onclick="save_row('3')" />
                            <input type="button" value="Delete" class="delete"
                                onclick="delete_row('3')" />
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    );
};

export default ManageFarmers;