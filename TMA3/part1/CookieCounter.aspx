<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CookieCounter.aspx.cs" Inherits="part1_CookieCounter" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CookieCounter.css"/>

    <%--https://stackoverflow.com/questions/1091372/getting-the-clients-timezone-in-javascript/--%>
    <script type="text/javascript">
        function GetClientTimeZone() {
            var offset = new Date().getTimezoneOffset() / 60; /*minutes to hour*/
            var timeZone = "UTC " + new Date().toUTCString();
            timeZone += (offset < 0) ? " (+" : " (-";
            timeZone += offset + " hrs)";
            document.getElementById("LblTime").innerHTML = timeZone;
        }
    </script>

    <title>Part 1 Cookie Counter</title>
</head>
<body onload="GetClientTimeZone()">
    <form id="form1" runat="server">
        <h1 id="title">COMP 466: TMA 3A</h1>
        <ul id="navBar">
            <li><a href="../tma3a.htm">Home</a></li>
            <li><a id="active">Part 1</a></li>
            <li><a href="../part2/Slideshow.aspx">Part 2</a></li>
            <li><a href="../part3/CompStore.aspx">Part 3</a></li>
            <li><a href="../part4/CompStore.aspx">Part 4</a></li>
        </ul>
        <div id="content">
            <asp:Image ID="ImageCookieIcon" runat="server" ImageUrl="~/images/if_Cookie_2138188.png"/>
            <h1 id="partTitle">COOKIE COUNTER</h1>
            <h3>Number of Hits: </h3><asp:Label runat="server" id="LblHitsCount">placeholder for visit counts</asp:Label><br/>
            <h3>Your IP Address: </h3><asp:Label runat="server" id="LblIpAddr">placeholder for visit counts</asp:Label><br/>
            <h3>Your Time Zone: </h3><asp:Label runat="server"  id="LblTime"></asp:Label><br/>

            <div id="buttons">
                <asp:Button runat="server" ID="btnResetCookie" BackColor="#990033" BorderColor="#990033"
                            BorderStyle="None" Font-Bold="True" Font-Size="Large" ForeColor="White" Height="50px" Text="RESET COOKIE" OnClick="btnResetCookie_Click"/>
                <asp:Button runat="server" ID="btnRefresh" BackColor="#159CB9" BorderColor="#159CB9"
                            BorderStyle="None" Font-Bold="True" Font-Size="Large" ForeColor="White" Height="50px" Text="REFRESH" OnClick="btnRefresh_Click"/>
            </div>
        </div>
    </form>
</body>
</html>
